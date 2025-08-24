"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItem = [
  { id: 1, label: "Email Collection", href: "/email-collection" },
  { id: 2, label: "Kangen Water®", href: "/kangen-water" },
  { id: 3, label: "Monwhooper Philosophy", href: "/philosophy" },
  { id: 4, label: "WakeWaterCo™", href: "https://wakewaterco.com/", external: true },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container mx-auto flex h-[var(--navigation-height)] w-full items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
  <img 
    src="/monwhooperlogo.png" 
    alt="Monwhooper Logo" 
    className="h-8 w-auto" 
  />
</Link>

          <div className="ml-auto flex h-full items-center">
          <Link
  href="https://calendar.app.google/eZRfTzmqzdqT8UFk7"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-6 text-sm rounded-md px-3 py-1.5 font-medium text-white bg-[#ff3131] hover:bg-[#e02b2b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff3131]"
>
  Kangen®
</Link>
<Link
  href="https://wakewaterco.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="mr-6 text-sm rounded-md px-3 py-1.5 font-medium bg-white text-black"
>
  WakeWaterCo™
</Link>
          </div>
          <button
            className="ml-6 md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            `fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] `,
            {
              "pointer-events-none": !hamburgerMenuIsOpen,
            }
          )}
        >
          <div className="container mx-auto flex h-[var(--navigation-height)] items-center justify-between">
          <Link className="flex items-center justify-center" href="/" aria-label="Monwhooper Home">
  <img
    src="/monwhooperlogo.png"
    alt="Monwhooper Logo"
    className="h-8 w-auto"
  />
</Link>

            <button
              className="ml-6 md:hidden"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button>
          </div>
          <motion.ul
            className={`flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in`}
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {menuItem.map((item) => (
  <motion.li
    variants={mobileLinkVar}
    key={item.id}
    className="border-grey-dark pl-6 py-0.5 border-b md:border-none"
  >
    {item.external ? (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${
          hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
        }`}
      >
        {item.label}
      </a>
    ) : (
      <Link
        href={item.href}
        className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${
          hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
        }`}
      >
        {item.label}
      </Link>
    )}
  </motion.li>
))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}
