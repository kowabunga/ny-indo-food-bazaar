import Testimony from './testimony';
import PropTypes from 'prop-types';

export default function Testimonies({ testimonies }) {
  return (
    <div className='flex flex-wrap items-center justify-center my-8'>
      {testimonies.map(testimony => (
        <Testimony testimony={testimony} key={testimony._id} />
      ))}
    </div>
  );
}

Testimonies.propTypes = {
  testimonies: PropTypes.array.isRequired,
};
