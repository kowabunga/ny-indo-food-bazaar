import Vendor from '../../models/Vendor';
import connectDb from '../../utils/db';

export default function VendorsPage({ vendors }) {
  return <div></div>;
}

export async function getStaticProps() {
  const connection = await connectDb();

  // let vendors = await Vendor.find({});

  return {
    props: {
      // vendors: JSON.parse(JSON.stringify(vendors)),
    },
  };
}
// import Vendor from '../../models/Vendor';
// import connectDb from '../../utils/db';
// import Testimonies from '../../components/testimonies/testimonies';
// import Spinner from '../../components/Spinner';

// export default function TestimonialsPage23({ testimonies }) {
//   return (
//     <section className='container mx-auto'>
//       {!testimonies ? (
//         <Spinner />
//       ) : (
//         testimonies.length > 0 && <Testimonies testimonies={testimonies} />
//       )}
//     </section>
//   );
// }

// export async function getStaticProps() {
//   const connection = await connectDb();
//   let testimonies = await Vendor.find({});

//   if (!testimonies) {
//     connection.disconnect();
//     return {
//       props: {
//         testimonies: null,
//       },
//     };
//   }

//   connection.disconnect();

//   testimonies = JSON.parse(JSON.stringify(testimonies));

//   return {
//     props: {
//       testimonies,
//     },
//     revalidate: 3600,
//   };
// }
