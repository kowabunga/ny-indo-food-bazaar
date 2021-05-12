import Offering from './offering';
import PropTypes from 'prop-types';

export default function OfferingsList({ offerings }) {
  console.log(offerings?.length);
  return (
    <>
      {offerings?.length > 0 &&
        offerings.map(offering => (
          <Offering offering={offering} key={offering._id} />
        ))}
    </>
  );
}

OfferingsList.propTypes = {
  offerings: PropTypes.array.isRequired,
};
