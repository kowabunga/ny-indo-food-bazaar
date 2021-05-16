import AddTestimonyForm from '../../components/testimonies/addTestimonyForm';
import connectDb from '../../middleware/connectDb';
import Vendor from '../../models/Vendor';
import { useRouter } from 'next/router';

export default function CreateTestimonial({ vendorNames }) {
  const router = useRouter();
  async function createTestimony({ name, comment, vendor }) {
    //@TODO Redirect back to testimony page!
    //@TODO Update api route to return object
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

    console.log(data);

    router.push(
      `/testimonials/${data.createdTestimony._id}`,
      `/testimonials/${data.createdTestimony._id}/?new=true`,
      { query: { new: true } }
    );
  }

  return (
    <section>
      <AddTestimonyForm
        submitForm={createTestimony}
        vendorNames={vendorNames}
      />
    </section>
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
