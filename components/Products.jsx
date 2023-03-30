import Image from "next/image";
// icons
import { GiWoodenChair, GiArabicDoor } from "react-icons/gi";
import { MdOutlineTableBar } from "react-icons/md";
import { BiBed, BiDetail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
// Arrays

const categories = [
  { name: "طاولات", icon: <MdOutlineTableBar />, id: 1 },
  { name: "كراسي", icon: <GiWoodenChair />, id: 2 },
  { name: "خزانات", icon: <GiArabicDoor />, id: 3 },
  { name: "سراير", icon: <BiBed />, id: 4 },
];
const products = [
  {
    id: 1,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "ابيض",
  },
  {
    id: 2,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "ابيض",
  },
  {
    id: 3,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
];

const Products = () => {
  return (
    <section className='bg-white' id='products'>
      <h1 className='text-green-500 border-b-green-500 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
        منتجاتنا
      </h1>
      <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
        اختر مايناسب بيتك
      </p>
      <div className='flex justify-center space-x-5 mt-7'>
        {categories.map((category) => (
          <button
            key={category.id}
            class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
            <div className='m-auto'>{category.icon}</div>
            <div className='mx-2'>{category.name}</div>
          </button>
        ))}
      </div>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group relative c-card p-2 shadow hover:shadow-lg rounded-md'>
              <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-95 lg:aspect-none lg:h-80'>
                <Image
                  width={0}
                  height={0}
                  sizes='(min-width: 640px) 50vw,
              (min-width: 1024px) 25vw,
             100vw"'
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between flex-row-reverse'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                    <a href={product.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {product.name}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  {product.price}
                </p>
              </div>
              <div className='flex justify-between mt-4'>
                <button class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
                  <div className='m-auto'>
                    <BiDetail />
                  </div>
                  <div className='mx-2'>تفاصيل</div>
                </button>
                <a href='tel:123-456-7890'>
                  <button
                    // key={category.id}
                    class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
                    <div className='m-auto'>
                      <BsFillTelephoneFill />
                    </div>
                    <div className='mx-2'>طلب الأن</div>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
