import Image from 'next/image';

const MobileApp = () => {
  return (
    <section className="container-main container-spacing-secondary">
      <div className="bg-grey-800 relative container overflow-hidden rounded-3xl px-20 py-[60px] pr-[400px] max-xl:pr-20 max-xl:pb-[566px] max-md:p-8 max-md:pb-[566px] max-sm:pb-[450px]">
        <div className="z-10 flex w-3/5 flex-col items-start gap-y-12 max-xl:w-full">
          <div className="flex flex-col items-start gap-y-6">
            <div className="flex flex-col items-start gap-y-4">
              <div className="bg-background text-grey-600 rounded-3xl border border-[#ECFFCD] px-4 py-1.5 text-sm leading-[20px] font-medium">
                Pricing
              </div>
              <h1 className="h-1_5 text-grey-50">
                Growth performance tracking made easy
              </h1>
            </div>
            <div className="flex items-center justify-start gap-6">
              <Image
                src="/assets/icons/cloud.svg"
                width={32}
                height={32}
                alt="cloud"
              />
              <div className="flex flex-col items-start gap-y-1">
                <p className="text-grey-50 font-medium">Cross-Platform Sync</p>
                <p className="text-grey-50 text-sm">
                  Real-time sync on all platform & devices.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Image
              src="/assets/images/app-store.svg"
              height={44}
              width={132}
              alt="app-store"
            />
            <Image
              src="/assets/images/play-market.svg"
              height={44}
              width={149}
              alt="play-market"
            />
          </div>
          <div className="flex items-center gap-x-5">
            <Image
              src="/assets/images/avatar-group.png"
              height={48}
              width={124}
              alt="avatars"
            />
            <p className="text-grey-50 flex items-center gap-x-1">
              <span>5/5</span>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8146 14.5565L5.91633 17.5483L7.24808 11.9653L2.88907 8.23133L8.61035 7.77266L10.8146 2.47314L13.0187 7.77266L18.7401 8.23133L14.3811 11.9653L15.7128 17.5483L10.8146 14.5565Z"
                  fill="#FAFAFA"
                />
              </svg>
            </p>
          </div>
        </div>
        <Image
          src="/assets/images/phone-dashboard-screen.png"
          alt="phone-dashboard-screen"
          width={566}
          height={539.5}
          className="absolute top-[100px] right-20 z-0 max-xl:top-[600px] max-xl:right-1/2 max-xl:translate-x-1/2 max-sm:top-[650px]"
        />
      </div>
    </section>
  );
};

export default MobileApp;
