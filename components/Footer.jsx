import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";

const navigation = [
  { name: "تواصل معنا", href: "#contact", id: 1 },
  { name: "موقعنا", href: "#location", id: 2 },
  { name: "منتجاتنا", href: "#products", id: 3 },
  { name: "من نحن؟", href: "#about-us", id: 4 },
];

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 m-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='lg:flex items-center lg:justify-between justify-center '>
          <ul className='flex text-center text-sm font-normal lg:font-semibold lg:text-gray-800 text-gray-700  lg:w-[35%]'>
            {navigation.map((item) => (
              <li className='p-4 w-1/4 hover:text-black' key={item.id}>
                <Link href={item.href} className='leading-6 pb-1'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href='/' className='flex justify-center'>
            <Image
              src={Logo}
              width={100}
              height={0}
              sizes='100vw'
              alt='logo'
              className='w-24 lg:w-32'
            />
          </Link>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
          © 2023{" "}
          <a href='https://flowbite.com/' className='hover:underline'>
            Khazanty™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
