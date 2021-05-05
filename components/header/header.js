import Navbar from './navbar/navbar';
import styles from '../../styles/header.module.css';
import Hero from '../home/hero';
import NextEvent from '../layout/nextEventDate';
export default function Header() {
  return (
    <header className={`w-full ${styles.headerHeight}`}>
      <Navbar />
      <NextEvent />
      <Hero />
    </header>
  );
}
