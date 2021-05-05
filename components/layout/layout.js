import Header from '../header/header';
import TestimonyState from '../../context/testimony/testimonyState';
import VendorState from '../../context/vendor/vendorState';

export default function Layout({ children }) {
  return (
    <>
      <TestimonyState>
        <VendorState>
          <Header />
          <main className='mx-auto'>{children}</main>
          <footer className='bg-green-100'>footer</footer>
        </VendorState>
      </TestimonyState>
    </>
  );
}
