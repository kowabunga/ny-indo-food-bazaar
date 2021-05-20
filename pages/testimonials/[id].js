import Head from 'next/head';
import Testimony from '../../models/Testimony';
import connectDb from '../../middleware/connectDb';
import Spinner from '../../components/Spinner';
import { useRouter } from 'next/router';
import UserTestimony from '../../components/testimonies/testimony';
import Alert from '../../components/Alert';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TestimonyDetailsPage({ testimony }) {
  const router = useRouter();
  const [newTestimony, setNewTestimony] = useState(false);

  useEffect(() => {
    const path = router.asPath.includes('new=true');
    if (path) setNewTestimony(true);
  }, []);

  if (router.isFallback) {
    return <Spinner />;
  }

  return !testimony ? (
    <>
      <Head>
        <title>Customer Testimony - New York Indonesian Food Bazaar</title>
        <meta
          name='description'
          content='Read what some of our customers have to say about us, our vendors, and the food we serve!'
        />
      </Head>
      <Alert
        alert='Testimony not found, please return to the previous page and try again.'
        error={true}
      />
    </>
  ) : (
    <>
      <Head>
        <title>Customer Testimony - New York Indonesian Food Bazaar</title>
        <meta
          name='description'
          content='Read what some of our customers have to say about us, our vendors, and the food we serve!'
        />
      </Head>
      {newTestimony && <Alert alert='Testimony created!' newTestimony={true} />}
      <section className='flex justify-center'>
        <UserTestimony testimony={testimony} isDetailsPage={true} />
      </section>
      <section className='p-5 sm:p-20 flex flex-col justify-center '>
        {!newTestimony && (
          <>
            <h3 className='text-2xl capitalize text-center'>
              Want to add your own testimony?
            </h3>
            <p className='py-2 text-center'>
              Feel free to share what you experienced at your most recent visit
              to the New York Indonesian Food Bazaar!
            </p>
            <Link href='/testimonials/create'>
              <a className='border border-purple-500 sm:w-1/5 mx-auto text-center rounded p-2 bg-white transition duration-200 hover:bg-purple-500 hover:text-white'>
                Add Testimony
              </a>
            </Link>
          </>
        )}
      </section>
    </>
  );
}

TestimonyDetailsPage.propTypes = {
  testimony: PropTypes.object.isRequired,
};
{
  /*  */
}
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
