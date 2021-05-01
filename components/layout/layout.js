import Header from '../header/header';
import NextEventDate from './nextEventDate';
import TestimonyState from '../../context/testimony/testimonyState';
import VendorState from '../../context/vendor/vendorState';

export default function Layout({ children }) {
  return (
    <>
      <TestimonyState>
        <VendorState>
          <Header />
          <NextEventDate />
          <main className='container mx-auto'>{children}</main>
          <footer className='bg-green-100'>footer</footer>
        </VendorState>
      </TestimonyState>
    </>
  );
}
