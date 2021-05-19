import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function Spinner({ color }) {
  return (
    <div
      className={
        color
          ? 'text-center text-3xl flex items-center justify-center'
          : 'text-center text-3xl flex items-center justify-center m-10'
      }
    >
      <FontAwesomeIcon
        icon='spinner'
        size={!color ? '2x' : '1x'}
        className={
          color
            ? `${color} motion-safe:animate-spin`
            : `text-green-500 motion-safe:animate-spin`
        }
      />
      <p className='inline-block ml-3 text-gray-600'>Loading...</p>
    </div>
  );
}

Spinner.defaultProps = {
  color: 'text-green-500',
};

Spinner.propTypes = {
  color: PropTypes.string.isRequired,
};
