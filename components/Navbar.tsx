'use client';

import { navItems } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import _ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(_ScrollTrigger);

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  useGSAP(() => {
    gsap.to('nav', {
      position: 'fixed',
      scrollTrigger: {
        start: 1,
        onEnter: () =>
          gsap.to('nav', {
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            background: '#fff',
            duration: 0.3,
          }),
        onLeaveBack: () =>
          gsap.to('nav', {
            boxShadow: 'none',
            background: '#f7f8f8',
            duration: 0.3,
          }),
      },
    });
  }, []);

  const handleMenuClick = () => {
    gsap.to('.nav-menu', {
      duration: 0.8,
      left: navOpen ? '-100%' : '0%',
      top: navOpen ? '-100%' : '100%',
      opacity: navOpen ? 0 : 1,
      ease: 'power2.out',
    });
    gsap.to('nav', {
      backgroundColor: navOpen ? '#fff' : '#f0eef4',
    });
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className="height-20 fixed top-0 bg-background2 transparent z-99 flex w-full justify-center px-20 py-6 max-lg:px-10 max-md:px-6">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/icons/Logo.svg"
            alt="Logo"
            width={134}
            height={32}
          />
        </Link>
        <ul className="flex items-center justify-center gap-x-8 max-lg:gap-x-6 max-md:hidden">
          {navItems.map(({ title, path }: NavItemProps, index: number) => (
            <li key={index}>
              <Link
                className={twMerge(
                  'text-grey-700 hover:text-primary-800 text-base transition-colors',
                  path === '/'
                    ? pathname === path && 'font-bold'
                    : pathname.startsWith(path) && 'font-bold'
                )}
                href={path}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <Button buttonType="premium" href="#" className="max-md:hidden">
          Get Started
        </Button>

        <div className="bg-primary-200 nav-menu absolute top-[-100%] left-[-100%] hidden w-full flex-col items-center justify-center gap-y-10 overflow-hidden px-8 py-10 opacity-0 max-md:flex">
          <ul className="flex flex-col items-center justify-center gap-y-8">
            {navItems.map(({ title, path }: NavItemProps, index: number) => (
              <li key={index} className="nav-link">
                <Link
                  onClick={handleMenuClick}
                  className={twMerge(
                    'text-grey-700 hover:text-primary-800 text-lg transition-colors',
                    path === '/'
                      ? pathname === path && 'font-bold'
                      : pathname.startsWith(path) && 'font-bold'
                  )}
                  href={path}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Button buttonType="premium" href="#">
            Get Started
          </Button>
        </div>

        <div className="hidden max-md:flex">
          {navOpen ? (
            <X
              size={30}
              className="text-grey-700 cursor-pointer"
              onClick={handleMenuClick}
            />
          ) : (
            <Menu
              size={30}
              className="text-grey-700 cursor-pointer"
              onClick={handleMenuClick}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
