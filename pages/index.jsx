import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Logo from "../public/logo.jpg";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import About from "@/components/About";
import Location from "@/components/Location";
import Products from "@/components/products";
import Contact from "@/components/contact";
import Intro from "@/components/Intro";

// Arrays
const navigation = [
  { name: "من نحن؟", href: "#about-us", id: 1 },
  { name: "منتجاتنا", href: "#products", id: 2 },
  { name: "موقعنا", href: "#location", id: 3 },
  { name: "تواصل معنا", href: "#contact", id: 4 },
];
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='bg-white '>
      <Head>
        <title>خزانتي</title>
      </Head>
      <header className='inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between m-2 lg:px-8 flex-row-reverse'
          aria-label='Global'>
          <div className='flex lg:flex-1 flex-row-reverse'>
            <a href='#' className='-m-1.5 p-1.5'>
              <Image src={Logo} width={80} height={0} alt='logo' />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12  flex-row-reverse'>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className='hover-underline-animation text-base font-semibold leading-6 text-gray-900 pb-1'>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/*components*/}
      <Intro />
      <About />
      <Products />
      <Location />
      <Contact />
    </div>
  );
}
