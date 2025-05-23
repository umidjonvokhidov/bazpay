import { statistics } from '@/constants';
import { twMerge } from 'tailwind-merge';

const Stats = ({ type }: { type: 'white' | 'dark' }) => {
  const isDark = type == 'dark';

  return (
    <section className="container-main px-8 py-6">
      <div
        className={twMerge(
          'border-grey-200 container flex items-center justify-center gap-x-20 gap-y-6 rounded-3xl border px-8 py-9 max-lg:flex-col',
          isDark && 'bg-grey-800'
        )}
      >
        <h3
          className={twMerge(
            'w-full max-w-[370px] max-lg:max-w-full max-md:text-center',
            isDark && 'text-grey-50'
          )}
        >
          Backed by a bunch of well-known{' '}
          <span className="text-primary-800">finance services from</span> around
          the world.
        </h3>
        <div className="flex w-full flex-wrap items-center justify-between gap-6 max-md:justify-center">
          {statistics.map(
            ({ title, description }: StatisticProps, index: number) => (
              <div className="flex flex-col items-start gap-y-4" key={index}>
                <h2
                  className={twMerge(
                    'max-md:text-center',
                    isDark && 'text-grey-50'
                  )}
                >
                  {title}
                </h2>
                <p
                  className={twMerge(
                    'max-md:text-center',
                    isDark && 'text-grey-50'
                  )}
                > 
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
