'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { IMaskInput } from 'react-imask';
import Button from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { cn } from '@/lib/utils';

const Contact = () => {
  // Update schema to match all form fields
  const contactFormSchema = z.object({
    firstName: z.string().min(2, 'First name is required').max(50),
    lastName: z.string().min(2, 'Last name is required').max(50),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(7, 'Phone number is required').max(20),
    subject: z.enum(['Product design', 'Website design']),
    message: z.string().min(2, 'Message is required').max(1000),
  });

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: 'Product design',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  };

  return (
    <section className="container-main container-spacing-secondary">
      <div className="flex-col-center container gap-y-20">
        <h1 className="max-w-[462px] text-center font-semibold">
          Get in touch with us
        </h1>
        <div className="flex items-center gap-20 max-xl:gap-10 max-sm:flex-col-reverse">
          <div className="bg-grey-700 relative flex h-[644px] w-full max-w-[490px] items-center justify-start overflow-hidden rounded-4xl p-8">
            <div className="absolute -right-[106px] bottom-[25px] z-0 h-[269px] w-[269px] rounded-full bg-[#282E3A]"></div>
            <div className="z-5 flex h-full w-full max-w-[338px] flex-col justify-between">
              <div className="flex flex-col items-start gap-y-4">
                <h3 className="text-grey-50 text-3xl leading-[38px] font-semibold max-lg:text-2xl max-lg:leading-7">
                  Contact Information
                </h3>
                <p className="text-grey-100">
                  Say something to start a live chat!
                </p>
              </div>
              <div className="flex flex-col items-start gap-y-10">
                <div className="flex items-center gap-x-6">
                  <Image
                    src="/assets/icons/phone-call.svg"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                  <p className="text-grey-50 text-base">+1012 3456 789</p>
                </div>
                <div className="flex items-center gap-x-6">
                  <Image
                    src="/assets/icons/sharp-email.svg"
                    alt="email"
                    width={24}
                    height={24}
                  />
                  <p className="text-grey-50 text-base">bazpay@gmail.com</p>
                </div>
                <div className="flex items-center gap-x-6">
                  <Image
                    src="/assets/icons/location-filled.svg"
                    alt="location"
                    width={24}
                    height={24}
                  />
                  <p className="text-grey-50 text-base">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <Link
                  href=""
                  className="flex-col-center group h-[30px] w-[30px] rounded-full bg-[#1B1B1B] transition-all hover:bg-white"
                  style={{
                    cursor:
                      'url("/assets/icons/clarity_cursor-hand-click-line.svg"), pointer',
                  }}
                >
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1.42545C14.4484 1.65977 13.8481 1.82841 13.2298 1.89409C13.8717 1.51853 14.3525 0.925213 14.5818 0.225451C13.9794 0.578331 13.3195 0.825776 12.6313 0.956811C12.3437 0.654018 11.9958 0.4128 11.6094 0.248186C11.2229 0.0835725 10.8062 -0.000908491 10.3852 7.36757e-06C8.68165 7.36757e-06 7.31162 1.35977 7.31162 3.02841C7.31162 3.26273 7.34046 3.49705 7.38733 3.72249C4.83656 3.59113 2.56159 2.39113 1.04915 0.553853C0.77357 1.01737 0.629156 1.54514 0.630934 2.08225C0.630934 3.13314 1.17354 4.05977 2.00096 4.60474C1.51335 4.58583 1.03715 4.45385 0.611104 4.21953V4.25681C0.611104 5.72841 1.66747 6.94793 3.07535 7.22841C2.81101 7.29602 2.53907 7.33061 2.26595 7.33136C2.06586 7.33136 1.87658 7.31184 1.68549 7.28521C2.07487 8.48521 3.20875 9.35681 4.55895 9.38521C3.50258 10.2 2.17943 10.6793 0.742699 10.6793C0.484918 10.6793 0.246966 10.6704 0 10.642C1.36282 11.503 2.97981 12 4.72119 12C10.3744 12 13.4677 7.38817 13.4677 3.38521C13.4677 3.25385 13.4677 3.12249 13.4587 2.99113C14.0572 2.55977 14.5818 2.02545 15 1.42545Z"
                      fill="white"
                      className="transition-all group-hover:fill-black"
                    />
                  </svg>
                </Link>

                <Link
                  href=""
                  className="flex-col-center group h-[30px] w-[30px] rounded-full bg-[#1B1B1B] transition-all hover:bg-white"
                  style={{
                    cursor:
                      'url("/assets/icons/clarity_cursor-hand-click-line.svg"), pointer',
                  }}
                >
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.40795 0.545C5.20773 0.508182 5.46273 0.5 7.5 0.5C9.53727 0.5 9.79227 0.508864 10.5914 0.545C11.3905 0.581136 11.9359 0.708636 12.4132 0.893409C12.913 1.08227 13.3664 1.3775 13.7414 1.75932C14.1232 2.13364 14.4177 2.58636 14.6059 3.08682C14.7914 3.56409 14.9182 4.10955 14.955 4.90727C14.9918 5.70841 15 5.96341 15 8C15 10.0373 14.9911 10.2923 14.955 11.092C14.9189 11.8898 14.7914 12.4352 14.6059 12.9125C14.4177 13.413 14.1227 13.8665 13.7414 14.2414C13.3664 14.6232 12.913 14.9177 12.4132 15.1059C11.9359 15.2914 11.3905 15.4182 10.5927 15.455C9.79227 15.4918 9.53727 15.5 7.5 15.5C5.46273 15.5 5.20773 15.4911 4.40795 15.455C3.61023 15.4189 3.06477 15.2914 2.5875 15.1059C2.08699 14.9177 1.63351 14.6227 1.25864 14.2414C0.877077 13.8668 0.581806 13.4136 0.393409 12.9132C0.208636 12.4359 0.0818182 11.8905 0.045 11.0927C0.00818181 10.2916 0 10.0366 0 8C0 5.96273 0.00886363 5.70773 0.045 4.90864C0.0811364 4.10955 0.208636 3.56409 0.393409 3.08682C0.582084 2.58642 0.877581 2.13317 1.25932 1.75864C1.63366 1.37716 2.08669 1.08189 2.58682 0.893409C3.06409 0.708636 3.60955 0.581818 4.40727 0.545H4.40795ZM10.5307 1.895C9.73977 1.85886 9.5025 1.85136 7.5 1.85136C5.4975 1.85136 5.26023 1.85886 4.46932 1.895C3.73773 1.92841 3.34091 2.05045 3.07636 2.15341C2.72659 2.28977 2.47636 2.45136 2.21386 2.71386C1.96503 2.95594 1.77353 3.25065 1.65341 3.57636C1.55045 3.84091 1.42841 4.23773 1.395 4.96932C1.35886 5.76023 1.35136 5.9975 1.35136 8C1.35136 10.0025 1.35886 10.2398 1.395 11.0307C1.42841 11.7623 1.55045 12.1591 1.65341 12.4236C1.77341 12.7489 1.965 13.0441 2.21386 13.2861C2.45591 13.535 2.75114 13.7266 3.07636 13.8466C3.34091 13.9495 3.73773 14.0716 4.46932 14.105C5.26023 14.1411 5.49682 14.1486 7.5 14.1486C9.50318 14.1486 9.73977 14.1411 10.5307 14.105C11.2623 14.0716 11.6591 13.9495 11.9236 13.8466C12.2734 13.7102 12.5236 13.5486 12.7861 13.2861C13.035 13.0441 13.2266 12.7489 13.3466 12.4236C13.4495 12.1591 13.5716 11.7623 13.605 11.0307C13.6411 10.2398 13.6486 10.0025 13.6486 8C13.6486 5.9975 13.6411 5.76023 13.605 4.96932C13.5716 4.23773 13.4495 3.84091 13.3466 3.57636C13.2102 3.22659 13.0486 2.97636 12.7861 2.71386C12.544 2.46505 12.2493 2.27355 11.9236 2.15341C11.6591 2.05045 11.2623 1.92841 10.5307 1.895ZM6.54205 10.312C7.07704 10.5347 7.67276 10.5648 8.22745 10.3971C8.78215 10.2294 9.2614 9.87426 9.58337 9.39244C9.90534 8.91062 10.05 8.33196 9.99276 7.7553C9.93548 7.17864 9.67978 6.63975 9.26932 6.23068C9.00766 5.96919 8.69128 5.76896 8.34295 5.64442C7.99463 5.51987 7.62302 5.47411 7.25488 5.51042C6.88675 5.54673 6.53124 5.66421 6.21396 5.85441C5.89667 6.0446 5.62551 6.30278 5.41998 6.61035C5.21445 6.91793 5.07967 7.26724 5.02535 7.63316C4.97103 7.99907 4.99851 8.37247 5.10582 8.72649C5.21313 9.0805 5.3976 9.40633 5.64595 9.68049C5.89429 9.95466 6.20034 10.1704 6.54205 10.312ZM4.77409 5.27409C5.13206 4.91612 5.55704 4.63216 6.02475 4.43843C6.49246 4.2447 6.99375 4.14498 7.5 4.14498C8.00625 4.14498 8.50754 4.2447 8.97525 4.43843C9.44296 4.63216 9.86794 4.91612 10.2259 5.27409C10.5839 5.63206 10.8678 6.05704 11.0616 6.52475C11.2553 6.99246 11.355 7.49375 11.355 8C11.355 8.50625 11.2553 9.00754 11.0616 9.47525C10.8678 9.94296 10.5839 10.3679 10.2259 10.7259C9.50295 11.4489 8.52241 11.855 7.5 11.855C6.47759 11.855 5.49705 11.4489 4.77409 10.7259C4.05113 10.003 3.64498 9.02241 3.64498 8C3.64498 6.97759 4.05113 5.99705 4.77409 5.27409ZM12.21 4.71909C12.2987 4.63541 12.3697 4.53478 12.4188 4.42316C12.468 4.31155 12.4942 4.19121 12.496 4.06927C12.4977 3.94734 12.475 3.82628 12.4292 3.71328C12.3833 3.60028 12.3153 3.49762 12.2291 3.41139C12.1428 3.32516 12.0402 3.25711 11.9272 3.21126C11.8142 3.16542 11.6931 3.14271 11.5712 3.14449C11.4492 3.14627 11.3289 3.17249 11.2173 3.22161C11.1057 3.27073 11.005 3.34175 10.9214 3.43045C10.7586 3.60297 10.6695 3.83213 10.673 4.06927C10.6764 4.30641 10.7722 4.53287 10.9399 4.70057C11.1076 4.86828 11.334 4.96402 11.5712 4.96748C11.8083 4.97093 12.0375 4.88183 12.21 4.71909Z"
                      fill="white"
                      className="transition-all group-hover:fill-black"
                    />
                  </svg>
                </Link>

                <Link
                  href=""
                  className="flex-col-center group h-[30px] w-[30px] rounded-full bg-[#1B1B1B] transition-all hover:bg-white"
                  style={{
                    cursor:
                      'url("/assets/icons/clarity_cursor-hand-click-line.svg"), pointer',
                  }}
                >
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6985 0.829529C11.7258 0.439129 10.6995 0.160494 9.64506 0.000569545C9.63551 -0.000837589 9.62569 0.000377705 9.61696 0.00404837C9.60823 0.00771903 9.60102 0.0136648 9.59631 0.021068C9.46412 0.226053 9.31787 0.494173 9.21569 0.704078C8.07908 0.553216 6.92295 0.553216 5.78635 0.704078C5.67236 0.470248 5.54341 0.242217 5.4001 0.021068C5.39529 0.0137459 5.38806 0.00786861 5.37936 0.00420974C5.37066 0.000550877 5.36089 -0.000718153 5.35135 0.000569545C4.29668 0.159638 3.27012 0.438418 2.29795 0.829529C2.28963 0.832306 2.28267 0.837522 2.27826 0.844288C0.333905 3.38528 -0.199527 5.86396 0.0620327 8.31148C0.0629702 8.32296 0.0714076 8.33444 0.08172 8.34182C1.21395 9.07535 2.48037 9.63541 3.82699 9.9981C3.8365 10.0007 3.84672 10.0006 3.85616 9.99783C3.8656 9.99502 3.87377 9.98966 3.87949 9.98252C4.16824 9.63815 4.42511 9.27491 4.64636 8.89282C4.65097 8.88495 4.65255 8.87599 4.65086 8.86727C4.64917 8.85855 4.6443 8.85054 4.63698 8.84444C4.63214 8.84044 4.62639 8.83737 4.62011 8.83542C4.2162 8.69966 3.82502 8.53654 3.45012 8.34756C3.43965 8.34237 3.43186 8.33386 3.42837 8.32378C3.42488 8.31371 3.42596 8.30285 3.43137 8.29344C3.43456 8.28734 3.43939 8.282 3.44543 8.27787C3.52418 8.22621 3.60293 8.17209 3.67793 8.11798C3.68456 8.11332 3.69251 8.11032 3.70093 8.10931C3.70935 8.1083 3.71793 8.10931 3.72574 8.11224C6.18103 9.09289 8.83882 9.09289 11.2641 8.11224C11.2722 8.10917 11.2811 8.10808 11.2899 8.1091C11.2986 8.11011 11.3069 8.11318 11.3138 8.11798C11.3888 8.17209 11.4675 8.22621 11.5463 8.27787C11.5527 8.28194 11.5578 8.28734 11.5612 8.29358C11.5646 8.29981 11.5662 8.30669 11.5658 8.31359C11.5655 8.3205 11.5631 8.32722 11.5591 8.33314C11.555 8.33907 11.5493 8.34402 11.5425 8.34756C11.1685 8.53827 10.7768 8.70119 10.3716 8.83461C10.3651 8.83665 10.3593 8.83992 10.3544 8.84417C10.3496 8.84842 10.3458 8.85355 10.3435 8.8592C10.3413 8.86468 10.3405 8.87049 10.3409 8.87627C10.3414 8.88205 10.3432 8.88768 10.3463 8.89282C10.5713 9.27409 10.8291 9.63815 11.1122 9.98252C11.1179 9.98966 11.1261 9.99502 11.1356 9.99783C11.145 10.0006 11.1552 10.0007 11.1647 9.9981C12.5136 9.63653 13.7821 9.07641 14.9156 8.34182C14.9213 8.33838 14.926 8.33387 14.9294 8.32862C14.9328 8.32337 14.9349 8.31751 14.9353 8.31148C15.2484 5.48187 14.4113 3.02369 12.7172 0.845108C12.7155 0.84151 12.713 0.838264 12.7097 0.835581C12.7065 0.832897 12.7027 0.830836 12.6985 0.829529ZM5.01292 6.82083C4.27324 6.82083 3.66481 6.2272 3.66481 5.49909C3.66481 4.77016 4.26199 4.17652 5.01292 4.17652C5.76947 4.17652 6.37228 4.77508 6.36103 5.49909C6.36103 6.2272 5.76385 6.82083 5.01292 6.82083ZM9.99662 6.82083C9.25787 6.82083 8.64851 6.2272 8.64851 5.49909C8.64851 4.77016 9.24569 4.17652 9.99662 4.17652C10.7532 4.17652 11.3569 4.77508 11.3447 5.49909C11.3447 6.2272 10.7532 6.82083 9.99662 6.82083Z"
                      fill="white"
                      className="transition-all group-hover:fill-black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <Form {...contactForm}>
            <form
              onSubmit={contactForm.handleSubmit(onSubmit)}
              className="w-full max-w-[614px] space-y-8"
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-xl:grid-cols-1">
                <FormField
                  control={contactForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-normal font-normal text-[#404040]">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          {...field}
                          className="text-grey-600 h-9 rounded-none border-t-0 border-r-0 border-b border-l-0 border-b-[#404040]/12 pl-0 text-sm font-medium shadow-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-normal font-normal text-[#404040]">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          {...field}
                          className="text-grey-600 h-9 rounded-none border-t-0 border-r-0 border-b border-l-0 border-b-[#404040]/12 pl-0 text-sm font-medium shadow-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-normal font-normal text-[#404040]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="bazpay@gmail.com"
                          type="email"
                          {...field}
                          className="text-grey-600 h-9 rounded-none border-t-0 border-r-0 border-b border-l-0 border-b-[#404040]/12 pl-0 text-sm font-medium shadow-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-normal font-normal text-[#404040]">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <IMaskInput
                          mask="+0 000 0000 000"
                          unmask={false}
                          placeholder="+1 012 3456 789"
                          className={cn(
                            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                            'text-grey-600 h-9 rounded-none border-t-0 border-r-0 border-b border-l-0 border-b-[#404040]/12 pl-0 text-sm font-medium shadow-none'
                          )}
                          {...field}
                          onAccept={(value: string) => field.onChange(value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormLabel className="text-base leading-normal font-normal text-[#404040]">
                  Select Subject?
                </FormLabel>
                <div className="mt-2 flex gap-x-6">
                  <FormField
                    control={contactForm.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-x-2">
                        <FormControl>
                          <input
                            type="radio"
                            value="Product design"
                            checked={field.value === 'Product design'}
                            onChange={() => field.onChange('Product design')}
                            className="hidden accent-green-400"
                          />
                        </FormControl>
                        <FormLabel className="flex cursor-pointer items-center gap-x-2 text-[12px] leading-normal font-normal">
                          {field.value === 'Product design' ? (
                            <Image
                              src="/assets/icons/checked.svg"
                              alt="checked"
                              width={24}
                              height={24}
                              className=""
                            />
                          ) : (
                            <Image
                              src="/assets/icons/unchecked.svg"
                              alt="unchecked"
                              width={24}
                              height={24}
                              className=""
                            />
                          )}
                          <span>Product design</span>
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-x-2">
                        <FormControl>
                          <input
                            type="radio"
                            value="Website design"
                            checked={field.value === 'Website design'}
                            onChange={() => field.onChange('Website design')}
                            className="hidden accent-green-400"
                          />
                        </FormControl>

                        <FormLabel className="flex cursor-pointer items-center gap-x-2 text-[12px] leading-normal font-normal">
                          {field.value === 'Website design' ? (
                            <Image
                              src="/assets/icons/checked.svg"
                              alt="checked"
                              width={24}
                              height={24}
                              className=""
                            />
                          ) : (
                            <Image
                              src="/assets/icons/unchecked.svg"
                              alt="unchecked"
                              width={24}
                              height={24}
                              className=""
                            />
                          )}
                          <span>Website design</span>
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={contactForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base leading-normal font-normal text-[#404040]">
                      Message
                    </FormLabel>
                    <FormControl>
                      <textarea
                        className="text-grey-600 h-auto max-h-20 min-h-9 rounded-none border-t-0 border-r-0 border-b border-l-0 border-b-[#404040]/12 pl-0 text-sm font-medium shadow-none focus:outline-none"
                        placeholder="Write your message.."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                arrowTheme="black"
                buttonType="premium"
                type="submit"
                buttonClassName="bg-secondary-800 text-grey-800 fill-grey-50"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
