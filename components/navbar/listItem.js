import Link from 'next/link';

export default function ListItem({
  activePage,
  mobileMenu,
  linkInfo: { href, title },
}) {
  const desktopClasses = `p-2 text-center rounded hidden sm:block transition duration-200 ease-in ${
    activePage === href ? 'shadow-inner bg-green-200' : 'text-gray-600'
  } hover:bg-green-100`;

  const mobileClasses = `p-5 transition duration-200 ease-in text-center shadow-sm ${
    activePage === href ? 'shadow-inner bg-green-200' : 'text-gray-600'
  } hover:bg-green-100`;

  return (
    <Link href={href}>
      <a>
        <li className={mobileMenu ? mobileClasses : desktopClasses}>{title}</li>
      </a>
    </Link>
  );
}
