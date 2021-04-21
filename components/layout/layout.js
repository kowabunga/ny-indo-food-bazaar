import Navbar from '../navbar/navbar';

export default function Layout({ children }) {
  return (
    <>
      <header className='shadow-md'>
        <Navbar />
      </header>
      <main className='container mx-auto'>{children}</main>
      <footer className='bg-green-100'>footer</footer>
    </>
  );
}
