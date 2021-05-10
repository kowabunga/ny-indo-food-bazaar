import Testimony from '../../models/Testimony';
import connectDb from '../../utils/db';
import Testimonies from '../../components/testimonies/testimonies';
import Spinner from '../../components/Spinner';

export default function TestimonialsPage({ testimonies }) {
  return (
    <section className='container mx-auto'>
      {!testimonies ? (
        <Spinner />
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
        testimonies: null,
      },
    };
  }

  connection.disconnect();

  testimonies = JSON.parse(JSON.stringify(testimonies));

  return {
    props: {
      testimonies,
    },
    revalidate: 3600,
  };
}
