import Offering from '../models/Offering';
import OfferingList from '../components/offerings/offerings';
import connectDb from '../middleware/connectDb';
import PropTypes from 'prop-types';

export default function Offerings({ offerings }) {
  console.log(offerings);
  return (
    <section className='lg:w-3/5 mx-auto'>
      <OfferingList offerings={offerings} />
    </section>
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
