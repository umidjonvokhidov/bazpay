import { measures } from '@/constants';
import Image from 'next/image';

const SecurityV2 = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center container gap-y-20 max-lg:gap-y-16 max-md:gap-y-10">
        <div className="flex flex-col items-center gap-y-4">
          <div className="border-grey-100 bg-background flex items-center gap-x-2 rounded-3xl border px-3 py-2">
            <Image
              src="/assets/icons/zap-fast.svg"
              width={24}
              height={24}
              alt="zap-fast"
            />
            <span className="text-grey-600 text-center text-sm font-medium">
              Security
            </span> 
          </div>
          <h2 className="w-[640px] text-center max-md:w-full">
            Secured with awesome security measures!
          </h2>
        </div>
        <div className="flex items-center justify-center gap-10 max-lg:flex-col">
          {measures.map(
            ({ title, icon, description }: MeasureProps, index: number) => (
              <div
                key={index}
                className="border-grey-100 flex w-full max-lg:flex-row flex-col items-start gap-6 max-sm:flex-col rounded-2xl border bg-white px-5 py-6 max-lg:px-4 max-lg:py-5"
              >
                <Image src={icon} alt={title} width={60} height={60} />
                <div className="flex flex-col items-start gap-y-4">
                  <h3>{title}</h3>
                  <p className="text-base leading-5 max-md:text-sm max-md:leading-4">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SecurityV2;
