import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.container}>
        <input type="text" className={styles.searchBar} placeholder="Search by Brand, Product, or Category" />
    </div>
  )
}

export default SearchBar


