export default function Hero() {
  return (
    <section className={`w-full my-3 grid grid-cols-6`}>
      <div className='col-start-1 col-end-4 md:col-start-2 md:col-end-6 p-3 mt-5'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl text-white'>
          New York Indonesian Food Bazaar
        </h1>
        <p className='text-gray-200 lg:text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          minima earum sit fuga vero repellendus suscipit quasi consequatur
          omnis numquam!
        </p>
      </div>
    </section>
  );
}
