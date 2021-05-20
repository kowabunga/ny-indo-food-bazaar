import Head from 'next/head';
import Vendor from '../../models/Vendor';
import connectDb from '../../middleware/connectDb';
import VendorList from '../../components/vendors/vendorList';
import Spinner from '../../components/Spinner';

export default function VendorsPage({ vendors }) {
  if (!vendors) {
    return (
      <>
        <Head>
          <title>Our Vendors - New York Indonesian Food Bazaar</title>
          <meta
            name='description'
            content='Meet our vendors and see what they have to offer you!'
          />
        </Head>
        <Spinner />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Our Vendors - New York Indonesian Food Bazaar</title>
        <meta
          name='description'
          content='Meet our vendors and see what they have to offer you!'
        />
      </Head>
      <section>
        <VendorList vendors={vendors} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const vendors = await connectDb(async function handler() {
    let vendors = await Vendor.find({}, 'name about image');

    if (!vendors) {
      return null;
    }

    return JSON.parse(JSON.stringify(vendors));
  })();

  if (!vendors) {
    return {
      props: {
        vendors: null,
      },
    };
  }

  return {
    props: {
      vendors,
      revalidate: 10,
    },
  };
}
