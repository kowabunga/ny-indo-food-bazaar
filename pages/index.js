import Testimony from '../models/Testimony';
import connectDb from '../utils/db';

import Link from 'next/link';
import Image from 'next/image';

export default function Home({ testimonies }) {
  return (
    <>
      <section className='p-20'>
        <h2 className='text-3xl m-3 tracking-wide text-center capitalize'>
          We serve the best of Indonesian food, crafted from recipes passed down
          through generations of family.
        </h2>

        <p className='text-xl text-gray-600 mb-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          error odit et, nostrum non totam sit ab, voluptate earum quam maiores
          dolor ducimus neque, fugit voluptatum dolore praesentium aliquid
          eveniet unde eius nihil nobis! Cumque excepturi qui error at maxime!
        </p>
      </section>
      <section className='p-20 '>
        <div className='text-xl grid grid-cols-2'>
          <p className='col-start-1 col-end-2 p-2 flex flex-col justify-around items-center text-center'>
            Our vendors carefully craft their delicious food just for you! Why
            don't you take a look at what they are offering at our next event?
            <Link href='/offerings'>
              <button
                type='button'
                className='bg-green-400 hover:bg-green-300 w-3/5 transition duration-200 ease-out text-white rounded p-2 mx-auto col-start-2 col-end-3 block capitalize'
              >
                take a look
              </button>
            </Link>
          </p>
          <div className='col-start-2 col-end-3 w-auto h-96 relative'>
            <Image
              src='/images/kevin-mccutcheon-APDMfLHZiRA-unsplash.jpg'
              alt='Image showing person cooking with pan'
              sizes='100%'
              layout='fill'
              objectFit='cover'
              // layout='responsive'
            />
          </div>
        </div>
      </section>
      {/* Will only show if we have reviews */}
      {testimonies.length > 0 && (
        <section>
          <h2 className='text-3xl text-center capitalize'>
            See what some of our customers have to say about us!
          </h2>
        </section>
      )}
    </>
  );
}

export async function getStaticProps() {
  const connection = await connectDb();
  let testimonies = await Testimony.find({});

  if (!testimonies) {
    connection.disconnect();
    return {
      props: {
        error: 'No testimonies found',
      },
    };
  }

  console.log(testimonies);

  connection.disconnect();

  //! Fix till I figure out what object is breaking default Nextjs serialization :)
  testimonies = JSON.parse(JSON.stringify(testimonies));

  return {
    props: {
      testimonies,
    },
    revalidate: 3600,
  };
}
