import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Logo from "../public/logo.png";

const navigation = [
  { name: "تواصل معنا", href: "#contact", id: 1 },
  { name: "موقعنا", href: "#location", id: 2 },
  { name: "منتجاتنا", href: "#products", id: 3 },
  { name: "من نحن؟", href: "#about-us", id: 4 },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [logoBig, setLogoBig] = useState(true);
  const [textColor, setTextColor] = useState("white");
  const [shadow, setShadow] = useState("none");
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor("#ffffff");
        setTextColor("#000000");
        setShadow(
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        );
        setLogoBig(false);
      } else {
        setBgColor("transparent");
        setTextColor("#ffffff");
        setShadow("none");
        setLogoBig(true);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className='fixed right-0 top-0 w-full z-20 ease-in duration-300'
      style={{ backgroundColor: `${bgColor}`, boxShadow: `${shadow}` }}>
      <div className='max-w-[1240px] lg:max-w-[1515px] m-auto flex justify-between items-center p-4 text-white'>
        <ul className='hidden sm:flex' style={{ color: `${textColor}` }}>
          {navigation.map((item) => (
            <li className='p-4' key={item.id}>
              <Link
                href={item.href}
                className='hover-underline-animation text-base font-semibold leading-6 pb-1'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/*mobile Button*/}
        <div onClick={handleNav} className='block sm:hidden z-10 h-full'>
          {nav ? (
            <AiOutlineClose size={20} color='black' />
          ) : (
            <AiOutlineMenu
              size={20}
              color='white'
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*mobile menu*/}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }>
          <ul className='flex flex-col-reverse'>
            {navigation.map((item) => (
              <li className='p-4 text-4xl hover:text-gray-500' key={item.id}>
                <Link
                  onClick={handleNav}
                  href={item.href}
                  className='hover-underline-animation text-base font-semibold leading-6 text-gray-900 pb-1'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href='/'>
          <Image
            src={Logo}
            width={100}
            height={0}
            sizes='100vw'
            alt='logo'
            className={`ease-in duration-200 w-[4rem] ${
              logoBig ? "lg:w-[7.5rem]" : "lg:w-[4.5rem]"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
