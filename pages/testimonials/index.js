import Testimony from '../../models/Testimony';
import connectDb from '../../middleware/connectDb';
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
