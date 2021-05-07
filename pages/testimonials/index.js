import Testimony from '../../models/Testimony';
import connectDb from '../../utils/db';
import Testimonies from '../../components/testimonies/testimonies';

export default function Testimonials({ testimonies }) {
  console.log(testimonies);
  return (
    <section className='container'>
      {!testimonies ? (
        <p>Loading...</p>
      ) : (
        testimonies.length > 0 && <Testimonies testimonies={testimonies} />
      )}
    </section>
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
