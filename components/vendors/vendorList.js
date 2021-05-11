import Vendor from './vendor';
export default function VendorList({ vendors }) {
  return (
    <>
      {vendors.map(vendor => (
        <Vendor vendor={vendor} />
      ))}
    </>
  );
}
