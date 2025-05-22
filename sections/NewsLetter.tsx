import Button from '@/components/Button';
import { Input } from '@/components/ui/input';

const NewsLetter = () => {
  return (
    <section className="container-main container-spacing-secondary">
      <div className="flex-col-center bg-grey-800 max-w-[1040px] w-full gap-y-12 rounded-4xl p-16 max-lg:p-12 max-md:p-8">
        <div className="flex-col-center max-w-[600px] w-full gap-y-4">
          <div className="text-grey-50 border-grey-50 rounded-3xl border px-4 py-1.5 text-sm leading-[20px] font-medium">
            Pricing
          </div>
          <h2 className="text-grey-50 text-center font-medium">Value Packed Newsletter</h2>
          <p className="text-center text-[#A0A2A6]">
            Subscribe to our newsletter for to know big updates before everyone
            else, and yeah you can unsubscribe anytime!
          </p>
        </div>
        <div className="border-grey-600 relative flex h-[56px] w-[460px] items-center justify-between rounded-4xl border bg-transparent px-2 py-1.5 max-sm:h-full max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-y-2 max-sm:rounded-3xl max-sm:p-4 max-sm:text-center">
          <Input
            type="email"
            className="placeholder:text-grey-100 text-grey-100 mr-[150px] placeholder:font-normal ml-2 h-full border-none shadow-none max-sm:mr-0 max-sm:ml-0 max-sm:w-full"
            placeholder="Enter your email"
          />
          <Button
            buttonType="secondary"
            href="#"
            className="text-grey-50 bg-primary-800 absolute right-2 h-10 border border-[#E6E0FC29] px-4 py-2 font-semibold transition-all duration-400 hover:border-[1px] max-sm:relative max-sm:w-full"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
