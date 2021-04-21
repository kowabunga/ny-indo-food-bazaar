import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ListItem from './listItem';
import styles from '../../styles/navbar.module.css';

export default function Navbar() {
  // store pathname of current page. Used for determing active link styles for navbar
  const [activePage, setActivePage] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(-Infinity);
  const router = useRouter();

  //Information necessary to create navbar "li" links
  const links = [
    { href: '/', title: 'What We Do' },
    { href: '/offerings', title: 'Offerings' },
    { href: '/testimonials', title: 'Testimonials' },
    { href: '/vendors', title: 'Vendors' },
  ];

  const mobileClasses = `h-full w-full flex-col `;

  const changeMobileMenu = e => {
    e.preventDefault();
    setMobileMenu(prevState => (prevState = !prevState));
  };

  const registerWindowSize = windowSize => {
    setWindowSize(windowSize);
  };

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router]);

  useEffect(() => {
    window.addEventListener('resize', registerWindowSize(window.innerWidth));

    if (windowSize > 640 && mobileMenu) {
      setMobileMenu(false);
    }

    // Cleanup event listener set on window object
    return () => {
      window.removeEventListener('resize', registerWindowSize);
    };
  }, [windowSize]);

  return (
    <nav className='px-2 py-3 w-full relative'>
      <ul
        className={`flex ${
          mobileMenu
            ? mobileClasses
            : 'items-center justify-between md:justify-around'
        }`}
      >
        <li>
          <Link href='/'>
            <a>
              <FontAwesomeIcon
                icon='utensils'
                size='2x'
                className='text-green-400'
              />
            </a>
          </Link>
        </li>

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
        className={`cursor-pointer text-2xl sm:hidden ml-auto absolute ${styles.fixedButton}`}
      >
        <FontAwesomeIcon icon='bars' />
      </button>
    </nav>
  );
}
