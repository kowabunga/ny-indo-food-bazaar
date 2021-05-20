import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-evenly bg-green-400 h-52 text-white'>
      <div>
        <h2 className='text-2xl'>New York Indonesian Food Bazaar</h2>
        <Link href='/auth/login'>
          <a className='hover:underline text-white'>Vendor Login</a>
        </Link>
      </div>
      <address>
        123 5th St <br></br> New York City, 11106 <br></br> (555) 555-5555
      </address>
      <div></div>
    </footer>
  );
}
