import styles from './Header.module.scss';
import NavBar from "./NavBar"
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className={styles.header}>
        <NavBar/>
        <SearchBar/>
    </div>
  )
}

export default Header