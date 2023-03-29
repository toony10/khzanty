import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { GiWoodenChair } from "react-icons/gi";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className='relative'>
      <div className='justify-center flex'>
        <div className='flex justify-center space-x-5 mt-7'>
          <button class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm '>
            <div className='m-auto'>
              <GiWoodenChair />
            </div>
            <div className='mx-2'>كراسي</div>
          </button>
        </div>
      </div>
      <div className='absolute right-0 top-5'>
        <button
          onClick={scrollLeft}
          className='p-2 m-2 rounded-full bg-slate-200'>
          <FiChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className='p-2 m-2 rounded-full bg-slate-200'>
          <FiChevronRight />
        </button>
      </div>
      <div
        id='content'
        className='carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-thin'>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>{" "}
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
