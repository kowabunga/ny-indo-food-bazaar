import PropTypes from 'prop-types';

export default function Offering({ offering }) {
  return (
    <div className='flex flex-col justify-center sm:grid sm:grid-cols-5 w-full border rounded p-2 m-5 xl:w-1/3 bg-white'>
      <div className='sm:col-start-1 sm:col-end-3'>
        <img src={offering.image} />
      </div>
      <div className='sm:col-start-3 sm:col-end-6 p-3'>
        <p className='text-xl text-blue-500 mb-2'>{offering.name}</p>
        <p className='ml-2'>{offering.description}</p>
      </div>
    </div>
  );
}

Offering.propTypes = {
  offering: PropTypes.object.isRequired,
};
