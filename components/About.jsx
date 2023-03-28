import Image from "next/image";
const About = () => {
  return (
    <section className='py-16 bg-white' id='about-us'>
      <h1 className='text-green-600 border-b-green-700 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
        من نحن؟
      </h1>
      <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
        نبذه مختصره عنا وعن خدماتنا
      </p>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
          <div className='md:5/12 lg:w-5/12'>
            <Image
              src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png'
              alt='image'
              loading='lazy'
              width={1000}
              height={0}
              sizes='50vw'
            />
          </div>
          <div className='md:7/12 lg:w-6/12'>
            <h2 className='text-2xl text-gray-900 font-bold md:text-4xl text-right'>
              محل بيع اثاث
            </h2>
            <p className='mt-6 text-gray-600 text-right'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className='mt-4 text-gray-600 text-right'>
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
