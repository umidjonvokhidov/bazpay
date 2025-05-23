'use client';

import Button from '@/components/Button';
import { faqs, teams } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useGSAP(() => {
    const runGsapIfLargeScreen = () => {
      if (window.innerWidth > 768) {
        gsap.to('.teams', {
          translateX: '-15%',
          scrollTrigger: {
            trigger: '.teams-section',
            start: 'top 100%',
            end: '60% 20%',
            scrub: 2,
          },
        });
      }
    };
    runGsapIfLargeScreen();
    window.addEventListener('resize', runGsapIfLargeScreen);
  }, [gsap]);

  return (
    <section className="container-main teams-section flex-col-center gap-y-20 overflow-x-hidden py-32 max-lg:py-20 max-md:overflow-x-auto max-md:py-12">
      <div className="flex-col-center gap-y-8 px-6">
        <div className="flex-col-center gap-y-3">
          <div className="bg-background text-grey-600 rounded-3xl border border-[#ECFFCD] px-4 py-1.5 text-sm leading-[20px] font-medium">
            Team
          </div>
          <h1 className="h-1_5 text-center">
            Meet the incredible <span className="text-primary-800">team</span>
          </h1>
        </div>
        <p className="text-grey-600 max-w-[520px] text-center">
          We pride ourselves of being the best of the best and our team
          encapsulates that.
        </p>
        <Button buttonType="secondary" href="/contact">
          Contact Us
        </Button>
      </div>
      <div className="scrollbar-hide flex w-full items-center justify-stretch gap-x-8 max-md:overflow-x-scroll">
        <div className="teams flex w-full items-center justify-stretch gap-x-8">
          {teams.map(
            (
              { fullName, image, job, linkedin, x }: TeamMemberProps,
              index: number
            ) => (
              <div
                key={index}
                className="flex-col-center min-w-[296px] gap-6 p-3 max-lg:w-[200px]"
              >
                <Image
                  src={image}
                  alt="personal photo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[296px] w-full rounded-[8px] object-cover"
                />
                <div className="flex w-full items-center justify-between gap-y-6 max-lg:flex-col">
                  <div className="flex flex-col items-start">
                    <h4 className="font-semibold">{fullName}</h4>
                    <p>{job}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Link href={x}>
                      <Image
                        src="/assets/icons/x.svg"
                        width={24}
                        height={24}
                        alt="x"
                      />
                    </Link>
                    <Link href={linkedin}>
                      <Image
                        src="/assets/icons/linkedin.svg"
                        width={24}
                        height={24}
                        alt="linkedin"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[1000px] px-12 pb-32 max-lg:px-8 max-lg:pb-20 max-md:px-6 max-md:pb-12 max-sm:pb-8"
      >
        {faqs.map(({ faq, answer }: FAQProps, index: number) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="cursor-pointer rounded-2xl p-8 max-lg:p-6 max-md:p-4 [&[data-state=open]]:bg-[#FAFAFA]"
          >
            <AccordionTrigger className="cursor-pointer text-lg leading-7 font-medium text-[#181D27] max-md:text-base max-md:leading-6">
              {faq}
            </AccordionTrigger>
            <AccordionContent className="cursor-pointer text-base leading-6 font-normal text-[#535862] max-md:text-sm max-md:leading-5">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Team;
