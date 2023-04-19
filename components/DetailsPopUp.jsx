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
      <div className=' rounded-lg transform transition-all'>
        <div class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            تفاصيل
          </h5>
          <p class='font-normal text-gray-700 dark:text-gray-400'>
            <a
              href='#'
              class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                تفاصيل{" "}
              </h5>
              <p class='font-normal text-gray-700 dark:text-gray-400'>
                تفاصيل تفاصيل تفاصيل تفاصيل تفاصيل تفاصيل تفاصيل تفاصيل تفاصيل
                تفاصيل تفاصيل
              </p>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopUp;
