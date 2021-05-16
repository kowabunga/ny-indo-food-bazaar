import { useState, useEffect } from 'react';
import styles from '../../styles/addTestimonyForm.module.css';
export default function AddTestimonyForm({ submitForm, vendorNames }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [vendor, setVendor] = useState('');
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (!hide) {
      setHide(true);
    }
  }, [comment]);

  function handleSubmit(e, data) {
    e.preventDefault();

    if (comment.length === 0) {
      setHide(false);
      return;
    }

    submitForm(data);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col w-4/5 sm:w-3/5 lg:w-2/5 mx-auto p-5 m-5 border rounded bg-white'
    >
      <h2 className='text-2xl text-center text-green-500'>Add Your Review</h2>
      <div className='my-3'>
        <label htmlFor='name' className='text-gray-700 block mb-2'>
          Name (optional)
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
          className={`block border rounded border-purple-500 p-1 ${styles.width}`}
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
          className={`block border rounded border-purple-500 p-1 ${styles.width}`}
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
          className={`block border rounded border-purple-500 p-1 ${styles.width}`}
        >
          <option value='DEFAULT' hidden selected></option>
          {vendorNames.map(vendor => (
            <option value={vendor._id} key={vendor._id}>
              {vendor.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type='submit'
        onClick={e => handleSubmit(e, { name, comment, vendor })}
        className='sm:w-2/5 border rounded border-purple-500 p-2 mx-auto transition duration-200 ease-in hover:bg-purple-500 hover:text-white'
      >
        Create Testimony
      </button>
    </form>
  );
}
