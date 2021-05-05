export default function Testimony({ testimony }) {
  return (
    <div className={`relative border shadow-sm m-2 p-5 rounded w-96`}>
      <p className='italic'>{testimony.comment}</p>
      <cite className='text-gray-500 block text-right'>- {testimony.name}</cite>
    </div>
  );
}
