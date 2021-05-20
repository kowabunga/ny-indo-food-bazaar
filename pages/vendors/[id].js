import Head from 'next/head';
import Spinner from '../../components/Spinner';
import connectDb from '../../middleware/connectDb';
import Vendor from '../../models/Vendor';
import Testimony from '../../models/Testimony';
import Offering from '../../models/Offering';
import TestimonyCard from '../../components/testimonies/testimony';
import Offerings from '../../components/offerings/offerings';
import Link from 'next/link';

export default function VendorDetailsPage({ vendorData }) {
  if (!vendorData) {
    return (
      <>
        <Head>
          <title>Vendor Information</title>
        </Head>
        <Spinner />
      </>
    );
  }

  const { vendor, testimonies, offerings } = vendorData;

  return (
    <>
      <Head>
        <title>{vendor[0].name} - Vendor Information</title>
        <meta
          name='description'
          content={`Read about our vendor, ${vendor[0].name} and what they have to offer you!`}
        />
      </Head>
      <section className='p-10'>
        <h2 className='text-2xl text-green-500'>{vendor[0].name}</h2>
        <p className='text-xl text-gray-700 ml-5'>{vendor[0].about}</p>
      </section>

      <section className='p-10'>
        <h3 className='text-xl capitalize text-green-500'>Our menu</h3>
        <Offerings offerings={offerings} />
      </section>

      <section className='p-10'>
        <h3 className='text-xl capitalize text-green-500'>
          See what our customers have to say about us!
        </h3>
        <div className='flex flex-wrap items-center justify-center m-5'>
          {testimonies.length > 0 &&
            testimonies.map(testimony => (
              <TestimonyCard
                testimony={testimony}
                isDetailsPage={true}
                key={testimony._id}
              />
            ))}
        </div>
      </section>
      <section className='p-5 sm:p-20 flex flex-col justify-center '>
        {
          <>
            <h3 className='text-2xl capitalize text-center'>
              Have something to share about us?
            </h3>
            <p className='py-2 text-center'>
              Feel free to let us know what you think!
            </p>
            <Link href='/testimonials/create'>
              <a className='border border-purple-500 sm:w-1/5 mx-auto text-center rounded p-2 bg-white transition duration-200 hover:bg-purple-500 hover:text-white'>
                Add Testimony
              </a>
            </Link>
          </>
        }
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
