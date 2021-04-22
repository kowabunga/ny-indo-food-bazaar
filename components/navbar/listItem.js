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
            activePage === href ? 'shadow-inner bg-green-200' : 'text-gray-600'
          } hover:bg-green-100 p-5 sm:p-2`}
        >
          {title}
        </li>
      </a>
    </Link>
  );
}
