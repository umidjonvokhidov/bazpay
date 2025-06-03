import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const PrivacyPolicy = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="bg-primary-200 container rounded-3xl px-10 py-24 max-lg:px-6 max-lg:py-20 max-md:px-4 max-md:py-16">
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-6">
            <h1>Privacy Policy</h1>
            <p>
              At MezPay, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our platform.
            </p>
          </div>
          <ul className="text-grey-600 list-disc space-y-2 pl-6 text-base">
            <li>
              Information We Collect 1.1 Personal Information - Name, email
              address, phone number - Date of birth, government-issued ID - Bank
              account or credit card details 1.2 Usage Information - IP address,
              browser type, device information - Pages visited, time spent on
              the platform - Trading history and preferences
            </li>
            <li>
              How We Use Your Information 2.1 To provide and maintain our
              services 2.2 To process transactions and send transaction
              notifications 2.3 To comply with legal and regulatory requirements
              2.4 To improve our platform and user experience 2.5 To communicate
              with you about our services and updates
            </li>
            <li>
              Information Sharing and Disclosure 3.1 With service providers and
              partners 3.2 In response to legal requests or to prevent harm 3.3
              In the event of a merger, sale, or asset transfer 3.4 With your
              consent
            </li>
            <li>
              Data Security 4.1 Implementation of industry-standard security
              measures 4.2 Regular security audits and updates 4.3 Employee
              training on data protection
            </li>
            <li>
              Your Rights and Choices 5.1 Access to your personal information
              5.2 Correction of inaccurate or incomplete data 5.3 Deletion of
              your data (subject to legal requirements) 5.4 Opting out of
              marketing communications
            </li>
            <li>
              Cookies and Tracking Technologies 6.1 Types of cookies we use 6.2
              How to manage cookie preferences 6.3 Third-party analytics and
              advertising
            </li>
            <li>
              International Data Transfers 7.1 Data storage locations 7.2
              Safeguards for international transfers
            </li>
            <li>
              Children&apos;s Privacy 8.1 Age restrictions for platform use 8.2
              Deletion of information collected from minors
            </li>
            <li>
              Changes to This Privacy Policy 9.1 Notification of significant
              changes 9.2 Effective date of updates
            </li>
            <li>
              Contact Us 10.1 Email address for privacy inquiries 10.2 Mailing
              address for written communications
            </li>
            <li>
              Data Retention 11.1 Duration of data storage 11.2 Criteria for
              determining retention periods
            </li>
            <li>
              Third-Party Links 12.1 Disclaimer for external websites 12.2
              Recommendation to review third-party privacy policies
            </li>
            <li>
              Do Not Track Signals 13.1 Our response to browser &quot;Do Not
              Track&quot; signals
            </li>
            <li>
              California Privacy Rights 14.1 Rights under the California
              Consumer Privacy Act (CCPA) 14.2 How to exercise these rights
            </li>
            <li>
              GDPR Compliance (for EU users) 15.1 Legal basis for processing
              personal data 15.2 Data Protection Officer contact information
            </li>
          </ul>
          <div className="flex flex-col gap-y-9 max-lg:gap-y-6 max-md:gap-y-4">
            <p className="text-grey-600 text-base">
              Last update: 25 June, 2025
            </p>
            <p className="text-grey-600 text-base">
              Note: This privacy policy should be customized to accurately
              reflect MezPay specific data practices and comply with all
              applicable laws and regulations in the jurisdictions where MezPay
              operates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
