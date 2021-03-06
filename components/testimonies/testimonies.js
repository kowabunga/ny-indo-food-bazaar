import Link from 'next/link';
import Testimony from './testimony';
import PropTypes from 'prop-types';

export default function Testimonies({ testimonies }) {
  return (
    <>
      <div className='flex flex-wrap items-center justify-center my-8 w-full'>
        {testimonies.map(testimony => (
          <Testimony testimony={testimony} key={testimony._id} />
        ))}
      </div>
      <section className='p-5 sm:p-20 flex flex-col justify-center '>
        <h3 className='text-2xl capitalize text-center'>
          Want to add your own testimony?
        </h3>
        <p className='py-2 text-center'>
          Feel free to share what you experienced at your most recent visit to
          the New York Indonesian Food Bazaar!
        </p>
        <Link href='/testimonials/create'>
          <a className='bg-red-500 hover:bg-red-600 text-white sm:w-2/5 lg:w-1/5 mx-auto text-center rounded p-2  transition duration-200'>
            Add Testimony
          </a>
        </Link>
      </section>
    </>
  );
}

Testimonies.propTypes = {
  testimonies: PropTypes.array.isRequired,
};
