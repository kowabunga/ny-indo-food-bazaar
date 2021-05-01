import Navbar from './navbar/navbar';
import styles from '../../styles/header.module.css';
export default function Header() {
  return (
    <header className={`w-full ${styles.headerHeight}`}>
      <Navbar />
    </header>
  );
}
