import Navbar from '../navbar/navbar';
import NextEventDate from './nextEventDate';

export default function Layout({ children }) {
  return (
    <>
      <header className='shadow-md'>
        <Navbar />
      </header>
      <NextEventDate />
      <main className='container mx-auto'>{children}</main>
      <footer className='bg-green-100'>footer</footer>
    </>
  );
}
