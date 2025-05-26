'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

type Option = {
  label: string;
  value: string;
};

type FilterPillsProps = {
  paramKey: string;
  options: Option[];
};

const CategoryFilter = ({ paramKey, options }: FilterPillsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeValue = searchParams.get(paramKey) || '';

  const setFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(paramKey, value);
    } else {
      params.delete(paramKey);
    }

    // Use router.replace to avoid scroll reset and full reload
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="scrollbar-hide flex max-w-full items-center gap-x-4 overflow-x-scroll">
      {options.map((option) => {
        const isActive = activeValue === option.value;

        return (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={clsx(
              'rounded-4xl px-6 py-4 cursor-pointer text-lg leading-6 max-lg:text-base max-lg:leading-5',
              isActive
                ? 'bg-primary-800 text-grey-50'
                : 'text-grey-700 bg-transparent'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
