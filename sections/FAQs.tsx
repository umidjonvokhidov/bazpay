import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/constants';

const FAQs = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="container grid grid-cols-2 items-start justify-between gap-20 max-lg:grid-cols-1 max-md:gap-10">
        <div className="flex flex-col items-start gap-y-5">
          <div className="flex flex-col items-start gap-y-3">
            <h5 className="text-[#6941C6]">Support</h5>
            <h6 className="text-[#181D27]">FAQs</h6>
          </div>
          <p className="text-[#535862]">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>
        <Accordion type="single" collapsible>
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
      </div>
    </section>
  );
};

export default FAQs;
