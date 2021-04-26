import Link from 'next/link';

export default function ListItem({
  activePage,
  mobileMenu,
  linkInfo: { href, title },
}) {
  return (
    <Link href={href}>
      <a>
        <li
          className={`${
            !mobileMenu && 'hidden'
          } my-1 sm:my-0 sm:block text-center rounded transition duration-200 ease-in ${
            activePage === href
              ? 'shadow-inner bg-green-500 text-white'
              : 'text-gray-100'
          } hover:bg-green-300 hover:text-black p-5 sm:p-2`}
        >
          {title}
        </li>
      </a>
    </Link>
  );
}
