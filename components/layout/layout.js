import Navbar from '../navbar/navbar';
import NextEventDate from './nextEventDate';
import TestimonyState from '../../context/testimony/testimonyState';
import VendorState from '../../context/vendor/vendorState';

export default function Layout({ children }) {
  return (
    <>
      <TestimonyState>
        <VendorState>
          <header className='shadow-md'>
            <Navbar />
          </header>
          <NextEventDate />
          <main className='container mx-auto'>{children}</main>
          <footer className='bg-green-100'>footer</footer>
        </VendorState>
      </TestimonyState>
    </>
  );
}
