import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License',
};

const License = () => {
  return (
    <>
      <section className="container-main flex-col-center px-20 py-16 max-lg:px-16 max-lg:py-12 max-md:px-10 max-md:py-6">
        <div className="container flex flex-col gap-y-8">
          <div className="flex max-w-[740px] flex-col gap-y-10">
            <h1>Instructions</h1>
            <p>
              All graphical assets in this template are licensed for personal
              and commercial use. If you&apos;d like to use a specific asset,
              please check the license below.
            </p>
          </div>
          <ul className="flex list-disc flex-col gap-y-4 text-lg">
            <li>Instructions</li>
            <li>SVG Icons</li>
            <li>Template Support</li>
            <li>Custom Design & Development</li>
          </ul>
        </div>
      </section>
      <section className="container-main flex-col-center p-32 max-lg:p-20 max-md:p-12">
        <div className="container flex flex-col gap-y-32 max-lg:gap-y-20 max-md:gap-y-16">
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-grey-700 font-medium">
                Illustration of the template
              </h2>
              <h3 className="text-primary-800 font-normal">Made by MezPay</h3>
            </div>
            <Image
              src="/assets/images/illustration-template.png"
              alt="License"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[800px] w-full rounded-2xl object-cover object-top max-lg:h-auto"
            />
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-grey-700 font-medium">Iconography</h2>
              <p className="text-grey-600 text-base font-normal">
                Iconography was sourced from{' '}
                <Link
                  href="https://tabler.io/icons"
                  className="text-primary-800 underline underline-offset-4"
                  target="_blank"
                >
                  Tabler icons
                </Link>{' '}
                Which is available under a CC0 license.
              </p>
            </div>
            <Image
              src="/assets/images/tabler-icons.png"
              alt="License"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[800px] w-full rounded-2xl object-cover object-top max-lg:h-auto"
            />
          </div>
          <div className="flex justify-between gap-10 max-lg:flex-col">
            <div className="flex w-full max-w-[576px] flex-col justify-between gap-y-10">
              <div className="flex flex-col gap-y-6">
                <h2 className="text-grey-700 font-medium">Photography</h2>
                <p className="text-grey-600 font-normal">
                  Images collection from:{' '}
                  <Link
                    href="https://lummi.ai"
                    className="text-primary-800 underline underline-offset-4"
                    target="_blank"
                  >
                    lummi.ai
                  </Link>{' '}
                </p>
              </div>
              <p className="text-grey-600 text-base font-normal">
                All images used in the Enova Webflow{' '}
                <span className="text-primary-800">CRM SAAS Template</span> are
                licensed for free personal and commercial use. If you&apos;d
                like to use any specific image, you can check the licenses and
                download the images for free on Lummi.{' '}
              </p>
            </div>
            <Image
              src="/assets/images/lummi.png"
              alt="License"
              width={576}
              height={544}
              sizes="100vw"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default License;
