import Link from 'next/link';

export default function ListItem({
  activePage,
  mobileMenu,
  linkInfo: { href, title },
}) {
  const desktopClasses = `p-2 text-center rounded hidden sm:block ${
    activePage === href ? 'shadow-inner bg-green-200' : 'text-gray-600'
  } hover:bg-green-100`;

  const mobileClasses = ``;
  
  return (
    <li className={mobileMenu ? mobileClasses : desktopClasses}>
      <Link href={href}>{title}</Link>
    </li>
  );
}
