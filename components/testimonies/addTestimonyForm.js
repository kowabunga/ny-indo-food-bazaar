import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/addTestimonyForm.module.css';
export default function AddTestimonyForm({ submitForm, vendorNames }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [vendor, setVendor] = useState('');
  const [hide, setHide] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (!hide) {
      setHide(true);
    }
  }, [comment]);

  function handleSubmit(e, data) {
    e.preventDefault();

    setCreating(true);

    if (comment.length === 0) {
      setHide(false);
      setCreating(false);
      return;
    }

    submitForm(data);
    // no
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col w-4/5 sm:w-3/5 lg:w-2/5 mx-auto p-5 m-5 border rounded bg-white'
    >
      <h2 className='text-2xl text-center text-orange-light'>
        Add Your Review
      </h2>
      <div className='my-3'>
        <label htmlFor='name' className='text-gray-700 block mb-2'>
          Name (optional)
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
          className={`block border rounded p-1 border-red-500 transition duration-100 ease-in focus:ring-2 focus:ring-red-500 focus:outline-none ${styles.width}`}
        />
      </div>
      <div className='my-3'>
        <label htmlFor='comment' className='text-gray-700 block mb-2'>
          Comment
        </label>
        <textarea
          type='text'
          name='comment'
          value={comment}
          onChange={e => setComment(e.target.value)}
          className={`block border rounded border-red-500 transition duration-100 ease-in focus:ring-2 focus:ring-red-500 focus:outline-none p-1 ${styles.width}`}
          required
        ></textarea>
        <span className={`text-red-500 ml-2 ${hide && 'hidden'}`}>
          You have to enter something here for others to read!
        </span>
      </div>
      <div className='my-3'>
        <label htmlFor='vendor' className='text-gray-700 block mb-2'>
          Select Vendor to Leave Review For (optional)
        </label>
        <select
          onChange={e => setVendor(e.target.value)}
          value={vendor}
          className={`block border rounded border-red-500 transition duration-50 ease-in focus:ring-2 focus:ring-red-500 focus:outline-none p-1 ${styles.width}`}
        >
          <option value='DEFAULT' hidden selected></option>
          {vendorNames.map(vendor => (
            <option value={vendor._id} key={vendor._id}>
              {vendor.name}
            </option>
          ))}
        </select>
      </div>
      <div className='group sm:w-3/5 mx-auto flex justify-center text-red-500 hover:text-white'>
        <button
          type='submit'
          onClick={e => handleSubmit(e, { name, comment, vendor })}
          className='w-full rounded bg-red-500 hover:bg-red-600 text-white p-2 transition duration-200 ease-in  flex items-center justify-center'
        >
          {creating && (
            <FontAwesomeIcon
              icon='spinner'
              className='inline motion-safe:animate-spin text-2xl mr-3'
            />
          )}
          {creating ? 'Creating Testimony...' : 'Create Testimony'}
        </button>
      </div>
    </form>
  );
}
