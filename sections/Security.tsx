'use client';

import { cards } from '@/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

const Security = () => {
  return (
    <section className="container-main p-10 max-md:p-5">
      <div className="bg-grey-800 flex-col-center h-[700px] w-full justify-start gap-y-20 overflow-hidden rounded-2xl px-8 py-10 max-md:px-6 max-md:py-8">
        <div className="flex-col-center gap-y-4">
          <div className="border-grey-700 flex items-center gap-x-2 rounded-3xl border px-3 py-1.5">
            <Image
              src="/assets/icons/zap-fast.svg"
              width={24}
              height={24}
              alt="zap-fast"
            />
            <span className="text-grey-50 text-center text-sm font-medium">
              Security
            </span>
          </div>
          <h1 className="text-grey-50 h-1_5 text-center">
            Check our premium cards
          </h1>
          <p className="text-grey-50 w-[694px] text-center max-md:w-auto">
            Discover a seamless platform designed for easy payments, quick money
            transfers, and all your financial needs.
          </p>
        </div>
        <div className="relative flex h-full w-[1360px] justify-center max-sm:w-[360px]">
          <Image
            src="/assets/images/phone-mockup.png"
            width={439}
            height={895}
            className="absolute top-0 left-1/2 -translate-x-1/2 max-sm:h-auto max-sm:w-[320px]"
            alt="phone-screen"
          />
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              0: {
                spaceBetween: 2,
                slidesPerView: 1,
                coverflowEffect: {
                  stretch: -1,
                },
              },
              720: {
                spaceBetween: 28,
                slidesPerView: 4,
                coverflowEffect: {
                  stretch: -60,
                },
              },
            }}
            spaceBetween={28}
            slidesPerView={4}
            modules={[Autoplay, EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
              stretch: -60, // Increase this value for more space between active and neighbors
              slideShadows: false,
            }}
            effect="coverflow"
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mt-[125px]"
          >
            {cards.map((image: string, index: number) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="flex-col-center">
                  <div className="rounded-2xl bg-black/25">
                    <Image
                      src={image}
                      width={352}
                      height={211}
                      className="m-auto h-auto max-sm:w-[250px]"
                      alt="card"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Security;
