import Spinner from '../../components/Spinner';
import connectDb from '../../middleware/connectDb';
import Vendor from '../../models/Vendor';
import Testimony from '../../models/Testimony';
import Offering from '../../models/Offering';
import TestimonyCard from '../../components/testimonies/testimony';
import Offerings from '../../components/offerings/offerings';

export default function VendorDetailsPage({ vendorData }) {
  if (!vendorData) {
    return <Spinner />;
  }

  const { vendor, testimonies, offerings } = vendorData;
  console.log(vendor, testimonies, offerings);

  console.log(vendor);

  return (
    <>
      <section className='p-10'>
        <h2 className='text-2xl text-green-500'>{vendor[0].name}</h2>
        <p className='text-xl text-gray-700 ml-5'>{vendor[0].about}</p>
      </section>

      <section className='p-10'>
        <h3 className='text-xl capitalize'>Our menu</h3>
        <Offerings offerings={offerings} />
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  console.log(id);
  const vendorData = await connectDb(async function handler() {
    let vendor = await Vendor.find({ _id: id });
    let testimonies = await Testimony.find({ vendor: id });
    let offerings = await Offering.find({ vendor: id });

    if (!vendor) {
      return null;
    }

    return {
      vendor: JSON.parse(JSON.stringify(vendor)),
      testimonies: JSON.parse(JSON.stringify(testimonies)),
      offerings: JSON.parse(JSON.stringify(offerings)),
    };
  })();

  return {
    props: {
      vendorData,
      revalidate: 10,
    },
  };
}

export async function getStaticPaths() {
  const vendors = await connectDb(async function handler() {
    const vendors = await Vendor.find({}).select('_id');

    return JSON.parse(JSON.stringify(vendors));
  })();

  return {
    paths: vendors.map(vendor => ({ params: { id: vendor._id.toString() } })),
    fallback: true,
  };
}
