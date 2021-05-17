import PropTypes from 'prop-types';

export default function Alert({ alert, error, newTestimony }) {
  return (
    <div
      // className={`rounded text-center mx-auto w-4/5 lg:w-3/5 m-5 p-3 text-2xl text-white border-2 ${
      //   type === 'ok'
      //     ? 'bg-green-400 border-green-600'
      //     : type === 'error'
      //     ? 'bg-red-400 border-red-600'
      //     : '' // in case things to be added
      // }`}
      className={
        error
          ? 'rounded text-center mx-auto w-4/5 lg:w-3/5 m-5 p-3 text-2xl text-white border-2 bg-red-400 border-red-600'
          : newTestimony
          ? 'rounded text-center mx-auto w-4/5 lg:w-3/5 m-5 p-3 text-2xl text-white border-2 bg-green-400 border-green-600'
          : ''
      }
    >
      {alert}
    </div>
  );
}

Alert.defaultProps = {
  error: false,
  newTestimony: false,
};

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
