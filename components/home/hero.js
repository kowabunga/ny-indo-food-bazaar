export default function Hero() {
  return (
    <section className={`w-full my-3 grid grid-cols-6`}>
      <div className='col-start-1 col-end-7 md:col-start-2 md:col-end-6 p-3 mt-5 md:text-center'>
        <h1 className='text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-white tracking-wide'>
          New York Indonesian Food Bazaar
        </h1>
        <p className='text-gray-200 lg:text-xl xl:text-2xl mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          minima earum sit fuga vero repellendus suscipit quasi consequatur
          omnis numquam!
        </p>
      </div>
    </section>
  );
}
