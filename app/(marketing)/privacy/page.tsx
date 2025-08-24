export const metadata = {
    title: "Privacy Policy — Stay Dangerous",
    description: "How we collect, use, and protect your personal information.",
  };
  
  export default function PrivacyPage() {
    return (
      <main className="px-4 sm:px-6 pt-[calc(env(safe-area-inset-top)+4rem)]">
        <article className="mx-auto w-full max-w-[68ch] space-y-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: August 24, 2025
          </p>
  
          <p>
            Your privacy is important to us. This Privacy Policy explains how{" "}
            <strong>Stay Dangerous</strong> collects, uses, and protects your
            information when you use our website and services.
          </p>
  
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address,
            and payment details when you interact with our services. We also
            collect non-personal data like browser type, IP address, and site
            usage statistics.
          </p>
  
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our services</li>
            <li>To communicate with you about updates and offers</li>
            <li>To ensure website security and prevent fraud</li>
          </ul>
  
          <h2 className="text-xl font-semibold">Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can
            disable cookies in your browser settings, but some site functionality
            may be affected.
          </p>
  
          <h2 className="text-xl font-semibold">Data Sharing</h2>
          <p>
            We do not sell or rent your personal information. We may share data
            with trusted third-party providers who assist us in operating our
            website and services.
          </p>
  
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. Please contact us at support@staydangerous.com for any
            requests.
          </p>
  
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, reach us at:
            support@staydangerous.com
          </p>
        </article>
      </main>
    );
  }
  