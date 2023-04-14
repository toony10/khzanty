import Image from "next/image";
import aboutImg from "../public/imgs/about/about.png";
const About = () => {
  return (
    <section className='py-16 bg-white' id='about-us'>
      <h1 className='text-green-600 border-b-green-700 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
        من نحن؟
      </h1>
      <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
        نبذه مختصره عنا وعن خدماتنا
      </p>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-7'>
        <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
          <div className='md:5/12 lg:w-5/12'>
            <Image
              src={aboutImg}
              alt='image'
              loading='lazy'
              width={1000}
              height={0}
              sizes='50vw'
              className='rounded-l-2xl'
            />
          </div>
          <div className='md:7/12 lg:w-6/12'>
            <h2 className='text-2xl text-gray-900 font-bold md:text-4xl text-right'>
              محل بيع اثاث
            </h2>
            <p className='mt-6 text-gray-600 text-right leading-8	'>
              فى خزانتى نوفر خدمات التصميم والصيانة لجميع أنواع الأثاث الخشبي،
              بما في ذلك خزانات الملابس والمطابخ وغرف النوم والحمامات. كما نتخصص
              في تصميم وتصنيع السراير والمقاعد والطاولات المنزلية، بأسعار
              تنافسية وجودة عالية.
            </p>
            <p className='mt-4 text-gray-600 text-right leading-8'>
              يمكن لفريقنا المتخصص في النجارة تصميم وتصنيع أي نوع من الأثاث
              المنزلي حسب رغبات العميل، بدءًا من التصميم الأولي وحتى التركيب
              والتشطيب النهائي. كما نوفر خدمات الصيانة الدورية لجميع أنواع
              الأثاث الخشبي للحفاظ عليه في حالة جيدة وتجديده في حال الضرورة.
            </p>
            <p className='mt-4 text-gray-600 text-right leading-8'>
              اتصل بنا اليوم للحصول على خدمات التصميم والصيانة النجارية الخاصة
              بك، وسنكون سعداء بمساعدتك في تحقيق رؤية منزلك الخشبي المثالي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
