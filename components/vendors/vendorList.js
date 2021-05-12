import VendorInfoCard from './vendorInfoCard';
import PropTypes from 'prop-types';

export default function VendorList({ vendors }) {
  return (
    <>
      {vendors.map(vendor => (
        <VendorInfoCard vendor={vendor} key={vendor._id} />
      ))}
    </>
  );
}

VendorList.propTypes = {
  vendors: PropTypes.array.isRequired,
};
