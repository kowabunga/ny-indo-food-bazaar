import Testimony from '../../models/Testimony';
import connectDb from '../../middleware/connectDb';
import Spinner from '../../components/Spinner';
import { useRouter } from 'next/router';
import UserTestimony from '../../components/testimonies/testimony';
import Alert from '../../components/Alert';
import PropTypes from 'prop-types';

export default function TestimonyDetailsPage({ testimony }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return !testimony ? (
    <Alert
      alert={
        'Testimony not found, please return to the previous page and try again.'
      }
    />
  ) : (
    <section className='flex justify-center'>
      <UserTestimony testimony={testimony} isDetailsPage={true} />
    </section>
  );
}

TestimonyDetailsPage.propTypes = {
  testimony: PropTypes.object.isRequired,
};

export async function getStaticProps(context) {
  const testimony = await connectDb(async function handler() {
    const testimonialId = context.params.id;

    const testimony = await Testimony.findById({ _id: testimonialId });

    return JSON.parse(JSON.stringify(testimony));
  })();

  return {
    props: {
      testimony,
      revalidate: 10,
    },
  };
}

export async function getStaticPaths() {
  const testimonies = await connectDb(async function handler() {
    const testimonies = await Testimony.find({});

    return JSON.parse(JSON.stringify(testimonies));
  })();

  return {
    paths: testimonies.map(testimony => ({
      params: { id: testimony._id.toString() },
    })),
    fallback: true, // will prevent page from loading until page is generated
  };
}
