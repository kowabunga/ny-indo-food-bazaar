import Testimony from '../models/Testimony';
import Spinner from '../components/Spinner';
import Link from 'next/link';
import Image from 'next/image';
import Testimonies from '../components/testimonies/testimonies';
import connectDb from '../middleware/connectDb';

export default function Home({ testimonies }) {
  return (
    <>
      <section className='p-5 sm:p-20'>
        <h2 className='text-2xl sm:text-3xl m-3 tracking-wide text-center capitalize'>
          We serve the best of Indonesian food, crafted from recipes passed down
          through generations of family.
        </h2>

        <p className='sm: text-xl text-gray-600 mb-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          error odit et, nostrum non totam sit ab, voluptate earum quam maiores
          dolor ducimus neque, fugit voluptatum dolore praesentium aliquid
          eveniet unde eius nihil nobis! Cumque excepturi qui error at maxime!
        </p>
      </section>

      <section className='py-20 text-xl grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-x-10 px-5 bg-green-500'>
        <p className='col-start-1 col-end-2 row-span-1 p-2 flex flex-col justify-around items-center text-center text-white text-2xl'>
          Our vendors carefully craft their delicious food just for you! Why
          don't you take a look at what they are offering at our next event?
          <Link href='/offerings'>
            <a className='bg-purple-500 text-white hover:bg-purple-700 w-3/5 transition duration-200 ease-out rounded p-2 mx-auto col-start-2 col-end-3 block capitalize'>
              take a look
            </a>
          </Link>
        </p>
        <div className='md:col-start-2 md:col-end-3 row-span-2 md:col-span- md:col-+w-auto h-96 relative'>
          <Image
            src='/images/kevin-mccutcheon-APDMfLHZiRA-unsplash.jpg'
            alt='Image showing person cooking with pan'
            sizes='100%'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>

      {/* Will only show if we have reviews */}

      {!testimonies ? (
        <Spinner />
      ) : (
        testimonies.length > 0 && (
          <section className='p-20'>
            <h2 className='text-3xl text-center capitalize'>
              See what some of our customers have to say about us!
            </h2>
            <Testimonies testimonies={testimonies} />
          </section>
        )
      )}
    </>
  );
}

export async function getStaticProps() {
  const testimonies = await connectDb(async function handler() {
    let testimonies = await Testimony.find({});

    if (!testimonies) {
      return null;
    }

    return JSON.parse(JSON.stringify(testimonies));
  })();

  if (!testimonies)
    return {
      props: {
        testimonies: null,
      },
    };

  return {
    props: {
      testimonies,
    },
    revalidate: 10,
  };
}
