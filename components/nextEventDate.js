export default function NextEvent() {
  return (
    <div className='shadow-md rounded text-center mx-auto w-4/5 mt-3 p-3 text-2xl bg-yellow-400 text-white'>
      <p className='inline-block'>Join us at our next event on</p>{' '}
      <date>{new Date().toLocaleString('en-us', { dateStyle: 'full' })}</date>
    </div>
  );
}
