import Head from 'next/head';
import AddTestimonyForm from '../../components/testimonies/addTestimonyForm';
import connectDb from '../../middleware/connectDb';
import Vendor from '../../models/Vendor';
import { useRouter } from 'next/router';

export default function CreateTestimonial({ vendorNames }) {
  const router = useRouter();
  async function createTestimony({ name, comment, vendor }) {
    const testimony = {
      testimony: {
        name,
        comment,
      },
      vendorId: vendor,
    };

    const res = await fetch('/api/testimonies', {
      method: 'POST',
      body: JSON.stringify(testimony),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    router.push(
      `/testimonials/${data.createdTestimony._id}`,
      `/testimonials/${data.createdTestimony._id}/?new=true`,
      { query: { new: true } }
    );
  }

  return (
    <>
      <Head>
        <title>Create Testimony - New York Indonesian Food Bazaar</title>
        <meta
          name='description'
          content='Share your experience at the New York Indonesian Food Bazaar!'
        />
      </Head>
      <section>
        <AddTestimonyForm
          submitForm={createTestimony}
          vendorNames={vendorNames}
        />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const vendorNames = await connectDb(async function handler() {
    const vendors = await Vendor.find({}).select('name _id');

    return JSON.parse(JSON.stringify(vendors));
  })();

  return {
    props: {
      vendorNames,
    },
    revalidate: 10,
  };
}
