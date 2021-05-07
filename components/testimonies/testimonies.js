import Testimony from './testimony';
export default function Testimonies({ testimonies }) {
  return (
    <div className='flex flex-wrap items-center justify-center my-8'>
      {testimonies.map(testimony => (
        <Testimony testimony={testimony} key={testimony._id} />
      ))}
    </div>
  );
}
