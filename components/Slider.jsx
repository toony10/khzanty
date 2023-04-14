import Image from "next/image";
import Link from "next/link";
import Home1 from "/public/imgs/Home1.jpg";
import Home2 from "../public/imgs/Home2.jpg";
import Home3 from "../public/imgs/Home3.jpg";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div className='h-80 sm:h-[30rem] xl:h-[45rem] relative w-full flex justify-center '>
      <div className='absolute z-10 bg-black bg-opacity-60 inset-0 flex justify-center items-center'>
        <div className='text-right w-full m-10 h-1/2'>
          <h1 className='text-4xl text-white sm:text-6xl arabic-font mt-4'>
            مرحبًا بكم في خزانتي{" "}
          </h1>
          <p className='mt-0 lg:mt-6 text-lg lg:text-2xl leading-8 text-gray-200'>
            نقدم خدمات التصنيع والصيانة لجميع أنواع الأثاث الخشبي
          </p>
          <p className='mt-0 lg:mt-6 text-lg lg:text-2xl leading-8 text-gray-200'>
            نحن نهتم بتوفير منتجات عالية الجودة وخدمات احترافية لتلبية احتياجات
            عملائنا
          </p>
          <div className='mt-3 lg:mt-10 flex justify-end  gap-x-6'>
            <Link
              href='#products'
              className='rounded-md bg-green-600 px-3.5 py-2.5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>
              ابدأ رحلتك معنا الأن
            </Link>
          </div>
        </div>
      </div>

      <Carousel
        slideInterval={1000}
        indicators={false}
        rightControl=' '
        leftControl=' '>
        <Image width={0} height={0} sizes='100vw' src={Home3.src} alt='lol' />
        <Image width={0} height={0} sizes='100vw' src={Home2.src} alt='lol' />
        <Image width={0} height={0} sizes='100vw' src={Home1.src} alt='lol' />
      </Carousel>
    </div>
  );
};

export default Slider;
