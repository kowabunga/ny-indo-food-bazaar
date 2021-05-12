import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Vendor({ vendor }) {
  return (
    <div className='flex-col items-center sm:grid sm:grid-cols-3 gap-5 p-5'>
      {vendor.image && (
        <div className='sm:col-start-1 sm:col-end-2 flex items-center justify-center'>
          <img src={vendor.image} alt='vendor image' />
        </div>
      )}
      <div className='sm:col-start-2 sm:col-end-4 '>
        <h3 className='text-xl capitalize'>{vendor.name}</h3>
        <p className='text-gray-700 py-2 pl-2'>{vendor.about}</p>
        <Link href={`/vendors/${vendor._id}`}>
          <a className='hover:underline text-purple-500 flex items-center w-40 pl-2'>
            Read More About Us
          </a>
        </Link>
      </div>
    </div>
  );
}

Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};
