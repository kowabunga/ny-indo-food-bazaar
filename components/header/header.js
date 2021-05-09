import Navbar from './navbar/navbar';
import styles from '../../styles/header.module.css';
import Hero from '../home/hero';
import NextEvent from '../layout/nextEventDate';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const path = router.pathname.split('/');
  console.log(path[1]);
  return (
    <header
      className={`w-full ${styles.header} ${
        path[1] === '' ? styles.headerHeight : 'h-96'
      }`}
    >
      <Navbar />
      <NextEvent />
      <Hero />
    </header>
  );
}
