import PropTypes from 'prop-types';

export default function Alert({ alert, type }) {
  return (
    <div
      className={`rounded text-center mx-auto w-4/5 lg:w-3/5 m-5 p-3 text-2xl text-white border-2 ${
        type === 'ok'
          ? 'bg-green-400 border-green-600'
          : type === 'error'
          ? 'bg-red-400 border-red-600'
          : '' // in case things to be added
      }`}
    >
      {alert}
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
