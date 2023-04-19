// icons
import { GrClose } from "react-icons/gr";
const DetailsPopUp = ({ imageSrc, onClose }) => {
  return (
    <div
      onClick={onClose}
      className='fixed bg-gray-900 bg-opacity-20 flex z-10 inset-0 overflow-y-auto items-center justify-center '>
      <div className=' bg-opacity-70  absolute z-10 right-5 top-5 w-9 p-1 rounded-md color h-9 cursor-pointer'>
        <GrClose size={30} color='red' onClick={onClose} />
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
        <img
          className='w-full'
          src='https://www.cairo24.com/UploadCache/libfiles/80/1/600x338o/812.jpg'
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #photography
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #travel
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopUp;
