export default function Alert({ alert }) {
  return (
    <div className='rounded text-center mx-auto w-4/5 lg:w-3/5 m-5 p-3 text-2xl bg-red-400 text-white border-2 border-red-600'>
      {alert}
    </div>
  );
}
