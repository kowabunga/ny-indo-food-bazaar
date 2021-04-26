import styles from '../../styles/home.module.css';

export default function Hero() {
  return (
    <section
      className={`w-full h-96 my-3 ${styles.backgroundImage} ${styles.overlay} grid grid-cols-3`}
    >
      <div className='col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-3 p-3'>
        <h1 className='text-5xl md:text-6xl text-white'>
          New York Indonesian Food Bazaar
        </h1>
        <p className='text-gray-200'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          minima earum sit fuga vero repellendus suscipit quasi consequatur
          omnis numquam!
        </p>
      </div>
    </section>
  );
}
