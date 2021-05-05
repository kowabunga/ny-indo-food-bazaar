import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ListItem from './listItem';
import styles from '../../../styles/navbar.module.css';

export default function Navbar() {
  // store pathname of current page. Used for determing active link styles for navbar
  const [activePage, setActivePage] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  //Information necessary to create navbar "li" links
  const links = [
    { href: '/', title: 'What We Do' },
    { href: '/offerings', title: 'Offerings' },
    { href: '/testimonials', title: 'Testimonials' },
    { href: '/vendors', title: 'Vendors' },
  ];

  const changeMobileMenu = e => {
    e.preventDefault();
    setMobileMenu(prevState => (prevState = !prevState));
  };

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router]);

  return (
    <nav
      className={`bg-white sm:bg-transparent px-2 pt-3 pb-2 w-full relative sm:grid sm:grid-cols-12 sm:items-center ${styles.navBorderBottom} relative`}
    >
      <Link href='/' className='col-span-1'>
        <a className='ml-2 '>
          <FontAwesomeIcon
            icon='utensils'
            size='2x'
            className='text-gray-700 sm:text-white'
          />
        </a>
      </Link>
      <ul
        className={`flex flex-col mt-1 sm:mt-0 sm:flex-row sm:items-center sm:justify-around sm:col-start-4 md:col-start-6 col-end-13 absolute bg-white left-0 sm:bg-transparent w-full sm:static`}
      >
        {/* Navbar Menu Items */}
        {links.map(link => (
          <ListItem
            linkInfo={link}
            activePage={activePage}
            key={link.href}
            mobileMenu={mobileMenu}
          />
        ))}
      </ul>
      <button
        onClick={changeMobileMenu}
        className={`cursor-pointer text-2xl sm:hidden ml-auto absolute text-gray-50 ${styles.fixedButton}`}
      >
        <FontAwesomeIcon
          icon='bars'
          className='text-gray-700 sm:text-white hover:text-green-400 transition duration-200 ease-in'
        />
      </button>
    </nav>
  );
}
