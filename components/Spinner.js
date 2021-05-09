import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Spinner() {
  return (
    <div className='text-center text-3xl flex items-center justify-center m-10'>
      <FontAwesomeIcon
        icon='spinner'
        size='2x'
        className='text-green-500 motion-safe:animate-spin'
      />
      <p className='inline-block ml-3 text-gray-600'>Loading...</p>
    </div>
  );
}
