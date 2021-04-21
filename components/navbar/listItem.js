import Link from 'next/link';

export default function ListItem({ activePage, linkInfo: { href, title } }) {
  return (
    <li
      className={`p-2 text-center rounded ${
        activePage === href ? 'shadow-inner bg-green-200' : 'text-gray-600'
      } hover:bg-green-100`}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
}
