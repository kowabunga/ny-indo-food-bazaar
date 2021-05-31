import Link from 'next/link';
import styles from '../../../styles/navbar.module.css';
import PropTypes from 'prop-types';

export default function ListItem({
  activePage,
  mobileMenu,
  linkInfo: { href, title },
}) {
  return (
    <li
      className={`${
        !mobileMenu ? 'hidden' : ''
      } my-1 sm:mt-0 sm:block text-center sm:text-white text-gray-800 hover:bg-blue-400 sm:hover:bg-transparent transition duration-200 ease-in ${
        styles.navLi
      } 
      ${mobileMenu && styles.navLiPadding}
      ${
        `/${activePage}` === href
          ? `bg-blue-300 text-white sm:bg-transparent  ${styles.liBorderBottom}`
          : ''
      }`}
    >
      <Link href={href}>
        <a className='p-5 sm:p-2'>{title}</a>
      </Link>
    </li>
  );
}

ListItem.propTypes = {
  activePage: PropTypes.string.isRequired,
  mobileMenu: PropTypes.bool.isRequired,
  linkInfo: PropTypes.object.isRequired,
};
