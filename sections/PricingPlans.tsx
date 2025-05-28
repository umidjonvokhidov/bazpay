import Button from '@/components/Button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { comparePlans, comparePlansFeatures } from '@/constants';
import Image from 'next/image';

const PricingPlans = () => {
  return (
    <section className="container-main container-spacing-secondary">
      <div className="flex-col-center container gap-y-16">
        <h2 className="font-semibold">Compare plans</h2>
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-full"></TableHead>
              {comparePlans.map(
                ({ plan, price, slug }: ComparePlanProps, index: number) => (
                  <TableHead key={index}>
                    <div className="mx-5 flex h-auto min-w-[250px] flex-col gap-y-8 rounded-2xl bg-white px-4 py-8">
                      <div className="flex-col-center gap-y-4">
                        <p>{plan}</p>
                        <h2>{price}</h2>
                      </div>
                      <Button
                        buttonType={
                          plan === 'Business' ? 'secondary' : 'primary'
                        }
                        href={`/pricing/${slug}`}
                        className="w-full"
                      >
                        Add to card
                      </Button>
                    </div>
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead colSpan={3}>
                <div className="mb-5 py-5 text-[30px] leading-[38px] font-semibold">
                  Feature Category
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {comparePlansFeatures.map(
              ({ key, label }: ComparePlanFeatureProps) => (
                <TableRow
                  key={key}
                  className="h-[56px] border-none odd:bg-[#FBFEF7] even:bg-white hover:odd:bg-[#FBFEF7] hover:even:bg-white"
                >
                  <TableCell className="px-4 py-6 text-base leading-6 font-normal">
                    {label}
                  </TableCell>
                  <TableCell className="w-[250px]">
                    {comparePlans[0].features.includes(key) ? (
                      <Image
                        className="mx-auto"
                        src="/assets/icons/feature-check.svg"
                        width={24}
                        height={24}
                        alt="feature-check"
                      />
                    ) : (
                      <Image
                        className="mx-auto"
                        src="/assets/icons/feature-cross.svg"
                        width={24}
                        height={24}
                        alt="feature-cross"
                      />
                    )}
                  </TableCell>
                  <TableCell className="w-[250px]">
                    {comparePlans[1].features.includes(key) ? (
                      <Image
                        className="mx-auto"
                        src="/assets/icons/feature-check.svg"
                        width={24}
                        height={24}
                        alt="feature-check"
                      />
                    ) : (
                      <Image
                        className="mx-auto"
                        src="/assets/icons/feature-cross.svg"
                        width={24}
                        height={24}
                        alt="feature-cross"
                      />
                    )}
                  </TableCell>
                  <TableCell className="w-[250px]">
                    {comparePlans[2].features.includes(key) ? (
                      <Image
                        className="mx-auto"
                        src="/assets/icons/feature-check.svg"
                        width={24}
                        height={24}
                        alt="feature-check"
                      />
                    ) : (
                      <Image
                        className="mx-auto"
                        src="/assets/icons/feature-cross.svg"
                        width={24}
                        height={24}
                        alt="feature-cross"
                      />
                    )}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PricingPlans;
