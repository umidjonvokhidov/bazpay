'use client';

import { companies } from '@/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

const Companies = () => {
  useGSAP(() => {
    gsap.to('.companies', {
      x: '0%',
      duration: 30,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section className="container-main container-spacing-primary">
      <div className="border-grey-200 container flex flex-col items-center gap-y-8 overflow-x-hidden rounded-3xl border px-10 py-6">
        <h3 className="text-center">
          Working for innovative{' '}
          <span className="text-primary-800">companies.</span>
        </h3>
        <div className="relative">
          <div
            style={{ filter: 'blur(17.441999435424805px)' }}
            className="absolute top-1/2 left-0 z-2 h-[114px] w-[114px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          />
          <div
            style={{ filter: 'blur(17.441999435424805px)' }}
            className="absolute top-1/2 right-0 z-2 h-[114px] w-[114px] translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          />
          <div className="flex w-full items-center gap-x-10 overflow-x-hidden max-lg:gap-x-5">
            <div className="companies flex flex-shrink-0 -translate-x-full items-center gap-x-10 max-lg:gap-x-5">
              {companies.map((image: string, index: number) => (
                <Image
                  key={index}
                  sizes="100vw"
                  width={0}
                  height={0}
                  src={image}
                  className="h-auto w-auto max-lg:scale-75"
                  alt="company brand"
                />
              ))}
            </div>
            <div className="companies flex flex-shrink-0 -translate-x-full items-center gap-x-10 max-lg:gap-x-5">
              {companies.map((image: string, index: number) => (
                <Image
                  key={index}
                  sizes="100vw"
                  width={0}
                  height={0}
                  src={image}
                  className="h-auto w-auto max-lg:scale-75"
                  alt="company brand"
                />
              ))}
            </div>
            <div className="companies flex flex-shrink-0 -translate-x-full items-center gap-x-10 max-lg:gap-x-5">
              {companies.map((image: string, index: number) => (
                <Image
                  key={index}
                  sizes="100vw"
                  width={0}
                  height={0}
                  src={image}
                  className="h-auto w-auto max-lg:scale-75"
                  alt="company brand"
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-center">
          Discover tailored financial solutions that secure your investments.
        </p>
      </div>
    </section>
  );
};

export default Companies;
