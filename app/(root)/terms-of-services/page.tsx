const TermsOfServices = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="bg-primary-200 container flex flex-col gap-y-12 rounded-3xl px-10 py-24 max-lg:px-6 max-lg:py-20 max-md:px-4 max-md:py-16">
        <div className="flex flex-col gap-y-6 max-md:gap-y-4">
          <h1 className="text-grey-800 text-4xl font-bold">
            Terms of Services
          </h1>
          <p className="text-grey-600">
            At MezPay, we are committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our platform.
          </p>
        </div>
        <div className="flex flex-col gap-y-16 max-lg:gap-y-12 max-md:gap-y-8">
          <div className="flex flex-col gap-y-4 max-md:gap-y-3">
            <h3 className="text-2xl font-semibold">1. Acceptance of Terms</h3>
            <p className="text-grey-600">
              By accessing or using Enova website, services, or products
              (collectively, the &quot;Services&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to
              these Terms, please do not use our Services.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 max-md:gap-y-3">
            <h3 className="text-2xl font-semibold">
              2. Description of Services
            </h3>
            <p className="text-grey-600">
              Enova is a digital agency providing web design, development,
              marketing, and related digital services. The specific services we
              offer may change over time.
            </p>
          </div>
          <div className="flex flex-col gap-y-12 max-md:gap-y-8">
            <div className="flex flex-col gap-y-4 max-md:gap-y-3">
              <h3 className="text-2xl font-semibold">
                3. User Responsibilities
              </h3>
              <p className="text-grey-600">
                You agree to use our Services only for lawful purposes and in
                accordance with these Terms. You shall not:
              </p>
            </div>
            <ul className="text-grey-600 list-disc pl-6 text-lg">
              <li>
                Use the Services in any way that violates applicable laws or
                regulations.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Services.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Services.
              </li>
              <li>
                Reproduce, duplicate, copy, sell, resell, or exploit any portion
                of the Services without express written permission from Enova.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 max-md:gap-y-3">
            <h3 className="text-2xl font-semibold">4. Intellectual Property</h3>
            <p className="text-grey-600">
              All content, features, and functionality of our Services are owned
              by Enova or its licensors and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 max-md:gap-y-3">
            <h3 className="text-2xl font-semibold">5. Payment and Billing</h3>
            <p className="text-grey-600">
              For paid Services, you agree to pay all fees associated with the
              Services you select. All fees are non-refundable unless otherwise
              specified.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 max-md:gap-y-3">
            <h3 className="text-2xl font-semibold">6. Termination</h3>
            <p className="text-grey-600">
              We reserve the right to terminate or suspend your access to our
              Services at our sole discretion, without notice, for conduct that
              we believe violates these Terms or is harmful to other users, us,
              or third parties, or for any other reason.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 max-md:gap-y-3">
            <h3 className="text-2xl font-semibold">7. Governing Law</h3>
            <p className="text-grey-600">
              These Terms shall be governed by and construed in accordance with
              the laws of [insert applicable jurisdiction], without regard to
              its conflict of law provisions.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 max-md:gap-y-3">
            <p className="text-grey-600">Enova</p>
            <p className="text-grey-600">
              By using our Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServices;
