import PropTypes from 'prop-types';

export default function Alert({ alert, color }) {
  return (
    <div
      className={`rounded text-center mx-auto w-4/5 lg:w-3/5 m-5 p-3 text-2xl bg-${color}-400 text-white border-2 border-${color}-600`}
    >
      {alert}
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
