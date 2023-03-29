import Image from "next/image";
// icons
import { GiWoodenChair, GiArabicDoor } from "react-icons/gi";
import { MdOutlineTableBar } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import Carousel from "./Carousel";
// Arrays

const productTypes = [
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
      <div className='mb-10'>
        <h1 className='text-green-500 border-b-green-500 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
          منتجاتنا
        </h1>
        <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          اختر مايناسب بيتك
        </p>
      </div>
      <Carousel />
    </section>
  );
};

export default Products;
