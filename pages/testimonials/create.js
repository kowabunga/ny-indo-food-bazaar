import AddTestimonyForm from '../../components/testimonies/addTestimonyForm';
import connectDb from '../../middleware/connectDb';
import Vendor from '../../models/Vendor';

export default function CreateTestimonial({ vendorNames }) {
  async function createTestimony({ name, comment, vendor }) {
    console.log('Creating testimony...');
    console.log(data);
    const testimony = {
      testimony: {
        name,
        comment,
      },
      vendorId: vendor,
    };
    const data = await fetch('/api/testimonies', {
      method: 'POST',
      body: JSON.stringify(testimony),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
