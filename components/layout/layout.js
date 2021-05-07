import Header from '../header/header';
import Footer from '../footer/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='mx-auto'>{children}</main>
      <Footer />
    </>
  );
}
