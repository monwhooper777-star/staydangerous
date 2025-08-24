export const metadata = {
    title: "Terms of Service — Stay Dangerous",
    description: "Our terms and conditions for using this website and services.",
  };
  
  export default function TermsPage() {
    return (
      <main className="px-4 sm:px-6 pt-[calc(env(safe-area-inset-top)+4rem)]">
        <article className="mx-auto w-full max-w-[68ch] space-y-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: August 24, 2025
          </p>
  
          <p>
            Welcome to <strong>Stay Dangerous</strong>. By accessing or using our
            website and services, you agree to comply with and be bound by the
            following terms and conditions. Please read them carefully.
          </p>
  
          <h2 className="text-xl font-semibold">Use of Our Services</h2>
          <p>
            You agree to use our website and services only for lawful purposes and
            in a way that does not infringe the rights of others or restrict their
            use of the website.
          </p>
  
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p>
            All content, trademarks, and assets on this site are the property of{" "}
            Stay Dangerous unless otherwise noted. You may not reproduce, modify,
            or distribute any content without prior written consent.
          </p>
  
          <h2 className="text-xl font-semibold">Disclaimers</h2>
          <p>
            Our services are provided “as is” without warranties of any kind. We
            do not guarantee that the website will always be available, secure, or
            error-free.
          </p>
  
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p>
            Stay Dangerous will not be held liable for any damages arising from
            your use or inability to use the website or services.
          </p>
  
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
            support@staydangerous.com
          </p>
        </article>
      </main>
    );
  }
  