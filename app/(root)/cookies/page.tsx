import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies',
};

const Cookies = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="bg-primary-200 container rounded-3xl px-10 py-24 max-lg:px-6 max-lg:py-20 max-md:px-4 max-md:py-16">
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-6">
            <h1>Cookies Policy</h1>
            <p className="text-grey-600">
              This Cookies Policy explains how MezPay uses cookies and similar
              technologies to recognize you when you visit our website. It
              explains what these technologies are and why we use them, as well
              as your rights to control our use of them.
            </p>
          </div>
          <ul className="text-grey-600 list-disc space-y-2 pl-6 text-base">
            <li>
              <strong>What Are Cookies?</strong> <br />
              Cookies are small text files stored on your device (computer,
              tablet, mobile) by websites you visit. They are widely used to
              make websites work, or work more efficiently, as well as to
              provide information to the site owners. Cookies can be “session
              cookies” (which are deleted when you close your browser) or
              “persistent cookies” (which remain on your device for a set period
              or until you delete them).
            </li>
            <li>
              <strong>Why We Use Cookies</strong> <br />
              We use cookies to:
              <ul className="list-disc pl-6">
                <li>Ensure the website functions properly and securely</li>
                <li>Remember your preferences and settings</li>
                <li>
                  Analyze how you use our site to improve performance and user
                  experience
                </li>
                <li>Personalize content and ads</li>
                <li>Enable social media features</li>
                <li>Facilitate communication and support</li>
              </ul>
            </li>
            <li>
              <strong>Types of Cookies We Use</strong> <br />
              <ul className="list-disc pl-6">
                <li>
                  <b>Essential cookies:</b> Required for core site
                  functionality, such as security, network management, and
                  accessibility. These cannot be disabled.
                </li>
                <li>
                  <b>Performance cookies:</b> Collect information about how
                  visitors use our website, such as which pages are visited most
                  often. These help us improve how our website works.
                </li>
                <li>
                  <b>Functionality cookies:</b> Allow the website to remember
                  choices you make (such as your username, language, or region)
                  and provide enhanced, more personal features.
                </li>
                <li>
                  <b>Targeting/Advertising cookies:</b> Used to deliver
                  advertisements more relevant to you and your interests. They
                  may also limit the number of times you see an ad and help
                  measure the effectiveness of advertising campaigns.
                </li>
                <li>
                  <b>Third-party cookies:</b> Set by external services (such as
                  analytics providers or advertisers) to collect data across
                  websites.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We Use Cookies</strong> <br />
              We use cookies to remember your preferences, analyze site traffic,
              provide social media features, and improve your experience on our
              platform. Some cookies are set by us, while others are set by
              third parties delivering services on our behalf.
            </li>
            <li>
              <strong>Managing Cookies</strong> <br />
              You can control and manage cookies in your browser settings. Most
              browsers allow you to refuse or accept cookies, delete cookies, or
              alert you when cookies are being sent. Please note that disabling
              cookies may affect the functionality of our website and your user
              experience.
            </li>
            <li>
              <strong>Third-Party Cookies</strong> <br />
              Some cookies on our website are placed by third-party services,
              such as analytics providers (e.g., Google Analytics), advertising
              networks, or social media platforms. These third parties may use
              cookies to collect information about your online activities over
              time and across different websites.
            </li>
            <li>
              <strong>How Long Are Cookies Stored?</strong> <br />
              The duration for which a cookie remains on your device depends on
              whether it is a “persistent” or “session” cookie. Persistent
              cookies remain until they expire or are deleted, while session
              cookies are removed when you close your browser.
            </li>
            <li>
              <strong>Changes to This Cookies Policy</strong> <br />
              We may update this Cookies Policy from time to time to reflect
              changes in technology, legislation, or our data practices. Any
              updates will be posted on this page with an updated effective
              date.
            </li>
            <li>
              <strong>Contact Us</strong> <br />
              If you have any questions about our use of cookies or this Cookies
              Policy, please contact us at{' '}
              <Link href="mailto:bazpay@gmail.com" className="underline">
                bazpay@gmail.com
              </Link>
              .
            </li>
          </ul>
          <div className="flex flex-col gap-y-9 max-lg:gap-y-6 max-md:gap-y-4">
            <p className="text-grey-600 text-base">
              Last update: 25 June, 2025
            </p>
            <p className="text-grey-600 text-base">
              Note: This cookies policy should be customized to accurately
              reflect MezPay&apos;s use of cookies and comply with all
              applicable laws and regulations in the jurisdictions where MezPay
              operates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cookies;
