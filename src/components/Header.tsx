import Styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={Styles.container}>
      <img src={logo} alt="logo do Feed" />
    </header>
  );
}