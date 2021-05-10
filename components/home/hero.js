import { useRouter } from 'next/router';
export default function Hero() {
  const router = useRouter();
  const pathRoute = router.pathname.split('/')[1];

  return (
    <section className={`w-full my-3 grid grid-cols-6`}>
      <div className='col-start-1 col-end-7 md:col-start-2 md:col-end-6 p-3 mt-5 md:text-center'>
        <h1 className='text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-white tracking-wide capitalize'>
          {pathRoute === ''
            ? 'new york indonesian food bazaar'
            : pathRoute === 'testimonials'
            ? 'customer testimonials'
            : pathRoute === 'offerings'
            ? 'vendor offerings'
            : pathRoute === 'vendors'
            ? 'meet our vendors'
            : ''}
        </h1>
        <p className='text-gray-200 lg:text-xl xl:text-2xl mt-2'>
          {pathRoute === ''
            ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          minima earum sit fuga vero repellendus suscipit quasi consequatur
          omnis numquam!`
            : pathRoute === 'testimonials'
            ? `See what our customers have to say about what we do!`
            : pathRoute === 'offerings'
            ? 'See what great foods our vendors have to offer you!'
            : pathRoute === 'vendors'
            ? 'Learn a little about those who come to to bring you great food!'
            : ''}
        </p>
      </div>
    </section>
  );
}
