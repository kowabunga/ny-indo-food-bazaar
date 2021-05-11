import Vendor from '../../models/Vendor';
import connectDb from '../../utils/db';

export default function VendorsPage({ vendors }) {
  console.log(vendors);
  return <div></div>;
}

export async function getStaticProps() {
  const connection = await connectDb();

  let vendors = await Vendor.find({});

  return {
    props: {
      vendors: JSON.parse(JSON.stringify(vendors)),
    },
  };
}
