import Link from 'next/link';
import styles from '../../../styles/navbar.module.css';

export default function ListItem({
  activePage,
  mobileMenu,
  linkInfo: { href, title },
}) {
  return (
    <li
      className={`${
        !mobileMenu ? 'hidden' : ''
      } my-1 sm:my-0 sm:block text-center sm:text-white text-gray-800 p-5 sm:p-2 hover:bg-green-200 sm:hover:bg-transparent transition duration-200 ease-in ${
        styles.navLi
      } ${
        `/${activePage}` === href
          ? `bg-green-300 text-white sm:bg-transparent  ${styles.liBorderBottom}`
          : ''
      }`}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
}
