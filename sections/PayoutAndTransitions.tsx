import Image from 'next/image';

const PayoutAndTransitions = () => {
  return (
    <section className="container-main px-24 py-28 max-xl:px-16 max-xl:py-24 max-lg:gap-y-16 max-lg:px-12 max-lg:py-16 max-md:gap-y-12 max-md:px-8 max-md:py-9">
      <div className="flex-col-center container gap-y-20">
        <div className="flex-col-center w-full max-w-[765px] gap-y-8">
          <div className="flex-col-center gap-y-3">
            <div className="bg-background text-grey-600 border-grey-100 rounded-3xl border px-4 py-1.5 text-sm leading-[20px] font-medium">
              Payout and Transitions
            </div>
            <h1 className="h-1_5 text-center">
              Work more efficiently with easy user access
            </h1>
          </div>
          <p className="text-grey-600 text-center">
            MezPay improves your finances with quick transfers, budgeting tools,
            and robust security for investing, saving, and managing expenses.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          <div className="grid grid-cols-2 grid-rows-2 gap-8 max-sm:grid-cols-1 max-sm:grid-rows-4">
            <div className="flex flex-col items-center justify-between rounded-2xl bg-[#FBFEF7]">
              <Image
                src="/assets/images/monthly-revenue.png"
                alt="monthly-revenue"
                width={272}
                height={72}
                className="w-[80%] -rotate-6 p-4"
              />
              <div className="flex flex-col items-start gap-y-2 p-4">
                <h4 className="font-semibold">Multi-Account Management</h4>
                <p>
                  View all your bank accounts in one dashboard, simplifying your
                  financial management.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between rounded-2xl bg-[#F0EEF4]">
              <Image
                src="/assets/images/live-analytics.png"
                alt="live-analytics"
                width={272}
                height={72}
                sizes="100vw"
                className="mx-auto p-4 max-md:w-[70%]"
              />
              <div className="flex flex-col items-start gap-y-2 p-4">
                <h4 className="font-semibold">Live Analytics</h4>
                <p>
                  Gain financial insights with interactive dashboards and
                  reports for quick, data-driven decisions.
                </p>
              </div>
            </div>
            <div className="relative flex h-full flex-col items-start justify-start gap-y-3 overflow-hidden rounded-2xl bg-[#F0EEF4] p-4">
              <Image
                src="/assets/icons/qubit.svg"
                width={48}
                height={48}
                className=""
                alt="qubit"
              />
              <h4 className="w-full max-w-[250px] font-semibold">
                Mastercard and credit cards are pretty handy!
              </h4>
              <Image
                src="/assets/images/cards.png"
                width={349}
                height={233}
                sizes="100vw"
                className="absolute -right-6 -bottom-3 scale-110"
                alt="cards"
              />
            </div>
            <div className="relative flex h-full flex-col items-start justify-start gap-y-3 overflow-hidden rounded-2xl bg-[#FBFEF7] p-4">
              <Image
                src="/assets/icons/card.svg"
                width={48}
                height={48}
                className="z-2"
                alt="qubit"
              />
              <h4 className="z-2 w-full max-w-[250px] font-semibold">
                Send money here to anywhere
              </h4>
              <Image
                src="/assets/images/statuses.png"
                width={282}
                height={252}
                sizes="100vw"
                className="absolute -right-0 -bottom-5 z-0 w-[90%] -rotate-6 max-md:w-[70%] max-sm:w-[80%]"
                alt="cards"
              />
            </div>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-[#181D27] p-6">
            <Image
              src="/assets/images/secure-transfer-chart.png"
              width={598}
              height={346}
              sizes="100vw"
              className="w-full p-6"
              alt="secure-transfer-chart"
            />
            <div className="flex h-[342px] flex-col items-start justify-center gap-y-6 max-lg:h-auto">
              <h6 className="text-grey-100">
                Secure Transfers Anytime, Anywhere
              </h6>
              <p className="text-grey-100 text-base leading-6 max-md:text-sm max-md:leading-5">
                Seamlessly send and receive payments with top-notch encryption,
                ensuring your money stays safe no matter where it goes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayoutAndTransitions;
