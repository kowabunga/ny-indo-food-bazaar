import Head from 'next/head';
import Offering from '../models/Offering';
import OfferingList from '../components/offerings/offerings';
import connectDb from '../middleware/connectDb';
import PropTypes from 'prop-types';

export default function Offerings({ offerings }) {
  return (
    <>
      <Head>
        <title>Offerings - New York Indonesian Food Bazaar</title>
        <meta
          name='description'
          content='See what different foods our vendors have to offer you to enjoy!'
        />
      </Head>
      <section className='p-5 sm:p-10 mx-auto flex flex-wrap justify-center'>
        <OfferingList offerings={offerings} />
      </section>
    </>
  );
}

Offerings.propTypes = {
  offerings: PropTypes.array.isRequired,
};

export async function getStaticProps() {
  const offerings = await connectDb(async function handler() {
    const offerings = await Offering.find({});

    if (!offerings) {
      return {
        props: {
          offerings: null,
        },
      };
    }

    return JSON.parse(JSON.stringify(offerings));
  })();
  return {
    props: {
      offerings,
    },
    revalidate: 10,
  };
}
