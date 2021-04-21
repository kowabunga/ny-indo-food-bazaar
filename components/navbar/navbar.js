import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ListItem from './listItem';

export default function Navbar() {
  // store pathname of current page. Used for determing active link styles for navbar
  const [activePage, setActivePage] = useState('');
  const router = useRouter();

  //Information necessary to create navbar "li" links
  const links = [
    { href: '/', title: 'What We Do' },
    { href: '/offerings', title: 'Offerings' },
    { href: '/testimonials', title: 'Testimonials' },
    { href: '/vendors', title: 'Vendors' },
  ];

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router]);

  return (
    <nav className='px-2 py-3 w-full'>
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

        {links.map(link => (
          <ListItem linkInfo={link} activePage={activePage} />
        ))}
      </ul>
    </nav>
  );
}
