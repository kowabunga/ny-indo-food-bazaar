import Head from 'next/head';
import Testimony from '../../models/Testimony';
import connectDb from '../../middleware/connectDb';
import Testimonies from '../../components/testimonies/testimonies';
import Spinner from '../../components/Spinner';

export default function TestimonialsPage({ testimonies }) {
  return (
    <>
      <Head>
        <title>Customer Testimonies - New York Indonesian Food Bazaar</title>
        <meta
          name='description'
          content='Read what some of our customers have to say about us, our vendors, and the food we serve!'
        />
      </Head>
      <section className='container mx-auto'>
        {!testimonies ? (
          <Spinner />
        ) : (
          <div className='px-5'>
            {testimonies.length > 0 && (
              <Testimonies testimonies={testimonies} />
            )}
          </div>
        )}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const testimonies = await connectDb(async function handler() {
    let testimonies = await Testimony.find({});

    if (!testimonies) {
      return {
        props: {
          testimonies: null,
        },
      };
    }

    return JSON.parse(JSON.stringify(testimonies));
  })();

  if (!testimonies) {
    return {
      props: {
        testimonies: null,
      },
    };
  }

  return {
    props: {
      testimonies,
    },
    revalidate: 10,
  };
}
