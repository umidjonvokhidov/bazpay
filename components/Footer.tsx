import { footerItems, footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from './ui/input';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="container-main container-spacing-secondary">
      <div className="w-full rounded-3xl bg-white flex justify-center items-center">
        <div className="container flex w-full flex-col items-start gap-y-12 px-8 py-10">
          <div className="flex w-full items-start justify-between gap-x-24 gap-y-12 max-xl:flex-col">
            <div className="flex w-full flex-col items-start gap-y-16 max-xl:flex-row max-xl:items-center max-xl:justify-between max-md:flex-col">
              <Link href="/">
                <Image
                  src="/assets/icons/Logo.svg"
                  alt="Logo"
                  width={134}
                  height={32}
                />
              </Link>
              <div className="flex flex-col items-start gap-y-4 max-md:w-full max-md:items-center">
                <h4 className="max-sm:text-center">
                  Subscribe for our newsletter
                </h4>
                <div className="border-grey-200 bg-grey-50 relative flex h-[52px] w-[380px] items-center justify-between rounded-[32px] border px-2 py-1.5 max-sm:h-full max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-y-2 max-sm:rounded-3xl max-sm:p-4 max-sm:text-center">
                  <Input
                    type="email"
                    className="mr-[150px] ml-2 h-full border-none shadow-none max-sm:mr-0 max-sm:ml-0 max-sm:w-full"
                    placeholder="Enter your email"
                  />
                  <Button
                    buttonType="premium"
                    href="#"
                    className="absolute right-0 translate-x-1 transition-all duration-400 max-sm:relative max-sm:w-full"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-x-10 gap-y-5 max-xl:w-full max-md:flex-col max-md:items-center">
              {footerItems.map(({ category, links }: FooterCategoryProps) => (
                <div
                  key={category}
                  className="flex w-[220px] flex-col gap-y-4 max-2xl:w-[170px] max-md:items-center"
                >
                  <h4 className="max-md:text-center">{category}</h4>
                  <div className="flex flex-col items-start gap-y-3 max-md:items-center">
                    {links.map(({ title, path, cms }: FooterLinkProps) => (
                      <Link
                        key={title}
                        href={path}
                        className="group text-grey-600 hover:text-primary-800 text-base leading-6 transition-colors max-md:text-center"
                      >
                        {title}
                        {cms && (
                          <span className="text-primary-800 border-primary-800 easy-in-out ml-1 rounded-full border px-2 py-0.5 text-[12px] leading-4.5 transition-all duration-200 group-hover:ml-1.5">
                            CMS
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-border flex w-full items-center justify-start gap-x-8 border-t pt-8 max-md:gap-x-6 max-sm:flex-col max-sm:gap-y-8">
            <p className="max-sm:text-center">
              © 2077{' '}
              <Link
                href="#"
                className="text-primary-800 border-primary-800 border-b text-base leading-6"
              >
                BazPay
              </Link>{' '}
              All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-x-4 max-md:gap-x-3 max-sm:gap-x-2">
              {footerLinks.map(({ title, path }: FooterLinkProps) => (
                <Link
                  className="hover:text-primary-800 text-base text-gray-600 transition-colors max-md:text-sm"
                  key={title}
                  href={path}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
