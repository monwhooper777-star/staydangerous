'use client';

import React, { useState, useRef, useEffect, memo, forwardRef } from 'react';
import { motion, useAnimation, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/* ------------------------------- GlowEffect ------------------------------- */

type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?: 'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static';
  blur?: number | 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none';
  scale?: number;
  duration?: number;
};

function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  mode = 'rotate',
  blur = 'medium',
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const BASE_TRANSITION = { repeat: Infinity, duration, ease: 'linear' };

  // Mutable record to satisfy framer-motion typing
  const animations: Record<NonNullable<GlowEffectProps['mode']>, any> = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
      ],
      transition: BASE_TRANSITION,
    },
    pulse: {
      background: colors.map((c) => `radial-gradient(circle at 50% 50%, ${c} 0%, transparent 100%)`),
      scale: [1 * scale, 1.1 * scale, 1 * scale],
      opacity: [0.5, 0.8, 0.5],
      transition: { ...BASE_TRANSITION, repeatType: 'mirror' },
    },
    breathe: {
      background: colors.map((c) => `radial-gradient(circle at 50% 50%, ${c} 0%, transparent 100%)`),
      scale: [1 * scale, 1.05 * scale, 1 * scale],
      transition: { ...BASE_TRANSITION, repeatType: 'mirror' },
    },
    colorShift: {
      background: colors.map((color, i) => {
        const next = colors[(i + 1) % colors.length];
        return `conic-gradient(from 0deg at 50% 50%, ${color} 0%, ${next} 50%, ${color} 100%)`;
      }),
      transition: { ...BASE_TRANSITION, repeatType: 'mirror' },
    },
    flowHorizontal: {
      background: colors.map((color) => {
        const next = colors[(colors.indexOf(color) + 1) % colors.length];
        return `linear-gradient(to right, ${color}, ${next})`;
      }),
      transition: { ...BASE_TRANSITION, repeatType: 'mirror' },
    },
    static: { background: `linear-gradient(to right, ${colors.join(', ')})` },
  };

  const getBlurClass = (b: GlowEffectProps['blur']) => {
    if (typeof b === 'number') return `blur-[${b}px]`;
    const presets = {
      softest: 'blur-sm',
      soft: 'blur',
      medium: 'blur-md',
      strong: 'blur-lg',
      stronger: 'blur-xl',
      strongest: 'blur-xl',
      none: 'blur-none',
    };
    return presets[b as keyof typeof presets];
  };

  return (
    <motion.div
      style={{ ...style, '--scale': scale, willChange: 'transform', backfaceVisibility: 'hidden' } as React.CSSProperties}
      animate={animations[mode] as any}
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        'scale-[var(--scale)] transform-gpu',
        getBlurClass(blur),
        className
      )}
    />
  );
}

/* ---------------------------- BackgroundBeams ----------------------------- */

const BackgroundBeams = memo(({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  ];

  return (
    <div className={cn("absolute inset-0 h-full w-full [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center z-0", className)}>
      <svg className="pointer-events-none absolute z-0 h-full w-full" width="100%" height="100%" viewBox="0 0 696 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        {paths.map((path, index) => (
          <motion.path key={`path-${index}`} d={path} stroke={`url(#linearGradient-${index})`} strokeOpacity="0.4" strokeWidth="0.5" />
        ))}
        <defs>
          {paths.map((_, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
              animate={{ x1: ["0%", "100%"], x2: ["0%", "95%"], y1: ["0%", "100%"], y2: ["0%", `${93 + Math.random() * 8}%`] }}
              transition={{ duration: Math.random() * 10 + 10, ease: "easeInOut", repeat: Infinity, delay: Math.random() * 10 }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="32.5%" stopColor="#6344F5" />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
});
BackgroundBeams.displayName = "BackgroundBeams";

/* ------------------------------ EnhancedInput ----------------------------- */

const EnhancedInput = memo(
  forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function EnhancedInput({ className, type, ...props }, ref) {
    const radius = 100;
    const [visible, setVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <Input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-base text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600",
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  })
);

/* -------------------------------- BoxReveal ------------------------------- */

type BoxRevealProps = {
  children: React.ReactNode;
  width?: string;
  boxColor?: string;
  duration?: number;
  className?: string;
};

const BoxReveal = memo(function BoxReveal({ children, width = 'fit-content', boxColor, duration, className }: BoxRevealProps) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible');
      mainControls.start('visible');
    } else {
      slideControls.start('hidden');
      mainControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <section ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ?? 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration ?? 0.5, ease: 'easeIn' }}
        style={{ position: 'absolute', top: 4, bottom: 4, left: 0, right: 0, zIndex: 20, background: boxColor ?? '#5046e6', borderRadius: 4 }}
      />
    </section>
  );
});

/* ------------------------------- EmailSignup ------------------------------ */

interface EmailSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  onSubmit?: (email: string) => void;
}

const EmailSignup: React.FC<EmailSignupProps> = ({
  title = "Monwhoopers Email List",
  subtitle = "Stay up to date with Monwhoopers content pertaining to Health, Wealth & Self.",
  placeholder = "Enter your email address",
  buttonText = "Get Access",
  successMessage = "Thanks! We'll be in touch soon.",
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // replace with POST /api/subscribe
    onSubmit?.(email);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="relative z-0 min-h-[60vh] bg-background flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-16 pb-16 md:pb-20">
        <BackgroundBeams />
        <div className="mx-auto w-full max-w-xl md:max-w-2xl px-6 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
              <Check className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-2">
              You're all set!
            </h1>
            <p className="text-muted-foreground max-w-prose mx-auto text-base md:text-lg leading-7">
              {successMessage}
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Default state
  return (
    <div className="relative z-0 min-h-[70vh] bg-background flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-16 pb-16 md:pb-20">
      <BackgroundBeams />

      {/* Soft glows */}
      <div className="pointer-events-none absolute top-10 left-10 w-56 h-56 opacity-20">
        <GlowEffect colors={['#3b82f6', '#8b5cf6', '#06b6d4']} mode="pulse" blur="strong" scale={0.7} duration={4} />
      </div>
      <div className="pointer-events-none absolute bottom-12 right-10 w-64 h-64 opacity-15">
        <GlowEffect colors={['#f59e0b', '#ef4444', '#ec4899']} mode="breathe" blur="stronger" scale={0.55} duration={6} />
      </div>

      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 relative z-10">
        <BoxReveal boxColor="hsl(var(--primary))" duration={0.4}>
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground mb-3">
            {title}
          </h1>
        </BoxReveal>

        <BoxReveal boxColor="hsl(var(--primary))" duration={0.4}>
          <p className="text-center text-muted-foreground max-w-prose mx-auto mt-2 text-base md:text-lg leading-7">
            {subtitle}
          </p>
        </BoxReveal>

        <BoxReveal boxColor="hsl(var(--primary))" duration={0.4} className="mt-6">
          {/* Perfect centering: grid with centered tracks */}
          <form onSubmit={handleSubmit} className="w-full">
            <div
              className="
                mx-auto grid w-full max-w-[520px] grid-cols-1 gap-3
                justify-items-stretch
                sm:max-w-none sm:grid-cols-[minmax(320px,420px)_auto] sm:justify-center sm:items-center
              "
            >
              <div className="relative w-full">
                <Label htmlFor="email" className="sr-only">Email address</Label>
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <EnhancedInput
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading || !email}
                className="h-12 w-full sm:w-auto px-5 group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Joining...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </Button>
            </div>
          </form>
        </BoxReveal>

        <BoxReveal boxColor="hsl(var(--primary))" duration={0.4}>
          <p className="text-xs text-muted-foreground text-center mt-4">
            By signing up, you agree to our{' '}
            <a href="#" className="underline hover:text-primary transition-colors">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
          </p>
        </BoxReveal>
      </div>
    </div>
  );
};

/* ---------------------------- Page: default export ---------------------------- */

export default function EmailCollectionPage() {
  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  return (
    <EmailSignup
      title="Monwhoopers Email List"
      subtitle="Stay up to date with Monwhoopers content pertaining to Health, Wealth & Self."
      buttonText="Get Access"
      placeholder="Enter your email address"
      onSubmit={handleEmailSubmit}
    />
  );
}
