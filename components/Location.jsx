const Location = () => {
  return (
    <section className='flex flex-col justify-center' id='location'>
      <h1 className='text-green-600 border-b-green-700 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-5 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
        موقعنا
      </h1>
      <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
        ستسعدنا زيارتك لنا في اي وقت
      </p>
      <div className='flex justify-center mt-10'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6958.765296474075!2d31.20112729999999!3d29.30044930000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1679590983898!5m2!1sar!2seg'
          width='1500'
          height='600'
          className='p-0'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </section>
  );
};

export default Location;
