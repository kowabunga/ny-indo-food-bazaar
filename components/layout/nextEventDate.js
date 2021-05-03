export default function NextEvent() {
  return (
    <div className='rounded text-center mx-auto w-4/5 mt-20 p-3 text-2xl bg-yellow-100 text-gray-700 border-2 border-yellow-400'>
      <p className='inline-block'>Join us at our next event on</p>{' '}
      <date>{new Date().toLocaleString('en-us', { dateStyle: 'full' })}</date>
    </div>
  );
}
