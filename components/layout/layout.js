import Header from '../header/header';
import Footer from '../footer/footer';
import TestimonyState from '../../context/testimony/testimonyState';
import VendorState from '../../context/vendor/vendorState';

export default function Layout({ children }) {
  return (
    <>
      <TestimonyState>
        <VendorState>
          <Header />
          <main className='mx-auto'>{children}</main>
          <Footer />
        </VendorState>
      </TestimonyState>
    </>
  );
}
