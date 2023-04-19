import Image from "next/image";
// icons
import { GrClose } from "react-icons/gr";
const DetailsPopUp = ({ imageSrc, name, details, code, onClose }) => {
  return (
    <div
      onClick={onClose}
      className='fixed bg-gray-900 bg-opacity-20 flex z-10 inset-0 overflow-y-auto items-center justify-center    filter'>
      <div className=' bg-opacity-70  absolute z-10 right-5 top-5 w-9 p-1 rounded-md color h-9 cursor-pointer'>
        <GrClose size={30} color='white' onClick={onClose} />
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white w-96'>
        <Image
          className='w-full'
          src={imageSrc}
          alt='Sunset in the mountains'
          width={0}
          height={0}
          sizes='100vw'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{name}</div>
          <p className='text-gray-700 text-base'>{details}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {code}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopUp;
