// icons
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  RiWhatsappFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";

const contactInfo = [
  {
    id: 1,
    text: "الواسطي , بني سويف , مصر",
    icon: <ImLocation2 className='m-auto' color='green' />,
    href: "https://www.google.com/maps/@29.300449,31.201127,16z?hl=ar",
  },
  {
    id: 2,
    text: "+01090677513",
    icon: <BsFillTelephoneFill className='m-auto' color='green' />,
    href: "https://wa.me/01090677513",
  },
  {
    id: 3,
    text: "amiranton257@gmail.com",
    icon: <MdEmail className='m-auto' color='green' />,
    href: "mailto: amiranton257@gmail.com",
  },
];

const Location = () => {
  return (
    <section className='flex flex-col bg-slate-50 justify-center' id='location'>
      <div>
        <h1 className='text-green-600 border-b-green-700 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-5 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
          موقعنا
        </h1>
        <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          ستسعدنا زيارتك لنا في اي وقت
        </p>
      </div>

      <div className='flex justify-center md:flex-row-reverse flex-col-reverse '>
        <div className='text-center m-auto md:w-1/2 w-full'>
          {contactInfo.map((info) => (
            <a key={info.id} href={info.href} target='_blank'>
              <div className='my-5'>
                {info.icon}
                <p>{info.text}</p>
              </div>
            </a>
          ))}
          <div className='flex justify-center my-7 space-x-8'>
            <a href='#' className='cursor-pointer'>
              <RiWhatsappFill className='h-9 w-8 fill-green-700 hover:w-12' />
            </a>
            <a href='#' className='cursor-pointer'>
              <RiFacebookCircleFill className='h-9 w-8 fill-blue-700 hover:w-12' />
            </a>
            <a href='#' className='cursor-pointer'>
              <RiInstagramFill className='h-9 w-8 fill-purple-700 hover:w-12' />
            </a>
          </div>
        </div>

        <div className='flex justify-center mt-10 md:w-1/2 w-full m-3 shadow-lg'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6958.765296474075!2d31.20112729999999!3d29.30044930000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1679590983898!5m2!1sar!2seg'
            width='1500'
            height='600'
            className='p-0'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
