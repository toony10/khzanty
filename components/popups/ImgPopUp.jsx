import Image from "next/image";

// icons
import { GrClose } from "react-icons/gr";

const ImgPopUp = ({ imageSrc, onClose }) => {
  return (
    <div
      onClick={onClose}
      className='fixed bg-gray-900 bg-opacity-20 flex z-10 inset-0 overflow-y-auto items-center justify-center'>
      <div className=' bg-opacity-70  absolute z-10 right-5 top-5 w-9 p-1 rounded-md color h-9 cursor-pointer'>
        <GrClose size={30} color='red' onClick={onClose} />
      </div>
      <div className=' rounded-lg transform transition-all'>
        <Image
          sizes='150vw'
          width={0}
          height={0}
          src={imageSrc}
          alt='product'
          className='object-contain mx-auto w-[90vw] max-h-[82vh] lg:mt-5'
        />
        {/*  <div className='px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
          <button
            type='button'
            className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto focus:outline-green-500 sm:text-sm'
            onClick={onClose}>
            أغلاق
          </button>
  </div>*/}
      </div>
    </div>
  );
};

export default ImgPopUp;
