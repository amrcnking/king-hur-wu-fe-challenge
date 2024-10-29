import styles from './Header.module.scss';
import NavBar from "./NavBar"

const Header = () => {
  return (
    <div className={styles.header}>
        <NavBar/>
    </div>
  )
}

export default Header