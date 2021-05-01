import Link from 'next/link';
import styles from '../../../styles/navbar.module.css';

export default function ListItem({
  activePage,
  mobileMenu,
  linkInfo: { href, title },
}) {
  //@TODO work on hover state not working
  return (
    <Link href={href}>
      <a>
        <li
          className={`${
            !mobileMenu ? 'hidden' : ''
          } my-1 sm:my-0 sm:block text-center text-black sm:text-white ${
            activePage === href
              ? `bg-green-300 text-white hover:bg-green-400 sm:hover:bg-transparent hover:text-white sm:bg-transparent  ${styles.liBorderBottom}`
              : ''
          } p-5 sm:p-2 navLi`}
        >
          {title}
        </li>
      </a>
    </Link>
  );
}
