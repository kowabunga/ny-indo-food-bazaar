import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ListItem from './listItem';

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
    <nav className='px-2 py-3 w-full'>
      {mobileMenu}
      <ul className='flex items-center justify-around'>
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
          <ListItem linkInfo={link} activePage={activePage} key={link.href} />
        ))}

        <li className='cursor-pointer text-2xl sm:hidden ml-auto'>
          <button onClick={changeMobileMenu}>
            <FontAwesomeIcon icon='bars' />
          </button>
        </li>
      </ul>
    </nav>
  );
}
