import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const Button = ({
  buttonType,
  href,
  children,
  className,
  type,
  buttonClassName,
  arrowTheme = 'white',
}: ButtonProps) => {
  return buttonType === 'premium' ? (
    type ? (
      <button
        type={type}
        style={{ filter: 'url(#goo)' }}
        className={twMerge(
          'group flex cursor-pointer items-center justify-center text-base max-lg:text-sm',
          className
        )}
      >
        <svg className="hidden">
          <defs>
            <filter id="goo" x="0" y="0" width="120%" height="100%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  
                0 1 0 0 0  
                0 0 1 0 0  
                0 0 0 20 -10"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <div
          className={twMerge(
            'text-grey-50 rounded-[32px] px-4 py-2 text-base max-sm:w-full',
            buttonClassName ? buttonClassName : 'bg-grey-800'
          )}
        >
          {children}
        </div>
        <div
          className={twMerge(
            '-translate-x-3 rounded-full p-4 transition-all duration-400 group-hover:translate-x-1',
            buttonClassName ? buttonClassName : 'bg-grey-800'
          )}
        >
          <Image
            src={`/assets/icons/arrow-${arrowTheme}.svg`}
            width={10}
            height={10}
            alt="arrow"
            className="transition-all duration-400 group-hover:rotate-45"
          />
        </div>
      </button>
    ) : (
      <Link
        href={href ? href : '#'}
        style={{ filter: 'url(#goo)' }}
        className={twMerge(
          'group flex cursor-pointer items-center justify-center text-base max-lg:text-sm',
          className
        )}
      >
        <svg className="hidden">
          <defs>
            <filter id="goo" x="0" y="0" width="120%" height="100%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  
                0 1 0 0 0  
                0 0 1 0 0  
                0 0 0 20 -10"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <div
          className={twMerge(
            'text-grey-50 rounded-[32px] px-4 py-2 text-base max-sm:w-full',
            buttonClassName ? buttonClassName : 'bg-grey-800'
          )}
        >
          {children}
        </div>
        <div
          className={twMerge(
            '-translate-x-3 rounded-full p-4 transition-all duration-400 group-hover:translate-x-1',
            buttonClassName ? buttonClassName : 'bg-grey-800'
          )}
        >
          <Image
            src={`/assets/icons/arrow-${arrowTheme}.svg`}
            width={10}
            height={10}
            alt="arrow"
            className="transition-all duration-400 group-hover:rotate-45"
          />
        </div>
      </Link>
    )
  ) : type ? (
    <button
      type={type}
      className={twMerge(
        'text-grey-800 flex h-12 cursor-pointer items-center justify-center gap-x-2 rounded-[32px] border px-4 py-3 text-base transition-all hover:border-t-4 hover:border-r-4 max-xl:h-11 max-xl:px-3 max-xl:py-2 max-xl:text-sm',
        buttonType === 'primary'
          ? buttonClassName
            ? buttonClassName + ' border-gray-200'
            : 'bg-background2 border-gray-200'
          : buttonClassName
            ? buttonClassName + ' border-primary-800 border-0'
            : 'bg-secondary-800 border-primary-800 border-0',
        className
      )}
    >
      {children}
    </button>
  ) : (
    <Link
      href={href ? href : '#'}
      className={twMerge(
        'text-grey-800 flex h-12 cursor-pointer items-center justify-center gap-x-2 rounded-[32px] border px-4 py-3 text-base transition-all hover:border-t-4 hover:border-r-4 max-xl:h-11 max-xl:px-3 max-xl:py-2 max-xl:text-sm',
        buttonType === 'primary'
          ? buttonClassName
            ? buttonClassName + ' border-gray-200'
            : 'bg-background2 border-gray-200'
          : buttonClassName
            ? buttonClassName + ' border-primary-800 border-0'
            : 'bg-secondary-800 border-primary-800 border-0',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
