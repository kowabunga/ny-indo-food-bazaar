import Testimony from '../../models/Testimony';
import connectDb from '../../utils/db';
import Spinner from '../../components/Spinner';
import { useRouter } from 'next/router';
import UserTestimony from '../../components/testimonies/testimony';
import Alert from '../../components/Alert';
import PropTypes from 'prop-types';

export default function TestimonyDetails({ testimony }) {
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

TestimonyDetails.propTypes = {
  testimony: PropTypes.object.isRequired,
};

export async function getStaticProps(context) {
  const connection = await connectDb();

  const testimonialId = context.params.id;

  const testimony = await Testimony.findById({ _id: testimonialId });

  connection.disconnect();

  return {
    props: {
      testimony: JSON.parse(JSON.stringify(testimony)),
      revalidate: 3600,
    },
  };
}

export async function getStaticPaths() {
  const connection = await connectDb();
  let testimonies;

  try {
    testimonies = await Testimony.find({});
  } catch (error) {
    connection.disconnect();
  }

  connection.disconnect();

  return {
    paths: testimonies.map(testimony => ({
      params: { id: testimony._id.toString() },
    })),
    fallback: true, // will prevent page from loading until page is generated
  };
}
