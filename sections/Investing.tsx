import Image from 'next/image';

const Investing = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center container gap-y-20 max-lg:gap-y-16 max-md:gap-y-8">
        <div className="flex-col-center w-full gap-y-4 max-lg:gap-y-3">
          <div className="border-grey-100 bg-background flex items-center gap-x-2 rounded-3xl border px-3 py-2">
            <Image
              src="/assets/icons/zap-fast.svg"
              width={24}
              height={24}
              alt="zap-fast"
            />
            <span className="text-grey-600 text-center text-sm font-medium">
              Investing in your future is crucial.
            </span>
          </div>
          <h1 className="h-1_5 w-[700px] text-center max-lg:w-full">
            Our team is constantly innovating.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
          <div className="flex-col-center col-span-1 gap-8 rounded-3xl bg-[#181D27] px-8 py-10 max-lg:gap-6 max-lg:px-6 max-lg:py-8">
            <div className="flex-col-center gap-y-6 max-lg:gap-y-4">
              <h6 className="text-center text-[#FAFAFA]">
                Real-Time Analytics & Reporting
              </h6>
              <p className="text-center text-[#FAFAFA]">
                Gain full visibility of your finances with interactive
                dashboards and reports. Make data-driven decisions with ease.
              </p>
            </div>
            <Image
              src="/assets/images/analytics-reporting-chart.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-contain object-bottom"
              alt="Real-Time Analytics & Reporting"
            />
          </div>
          <div className="flex-col-center col-span-1 gap-8 rounded-3xl bg-[#BCFC6A] px-8 py-10 max-lg:gap-6 max-lg:px-6 max-lg:py-8">
            <div className="flex-col-center gap-y-6 max-lg:gap-y-4">
              <h6 className="text-grey-800 text-center">
                AI-Powered Budgeting Tools
              </h6>
              <p className="text-grey-800 text-center">
                Track your spending and savings automatically. Our AI tools
                provide personalized insights to help you stay on top of your
                finances.
              </p>
            </div>
            <Image
              src="/assets/images/phone-credit-card.png"
              width={552}
              height={400}
              sizes="100vw"
              className="translate-y-10 max-lg:translate-y-8"
              alt="Real-Time Analytics & Reporting"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investing;
