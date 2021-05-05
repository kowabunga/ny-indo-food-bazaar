import Testimony from './testimony';
export default function Testimonies({ testimonies }) {
  return (
    <div className='flex flex-wrap justify-center my-5'>
      {testimonies.map(testimony => (
        <Testimony testimony={testimony} key={testimony._id} />
      ))}
    </div>
  );
}
