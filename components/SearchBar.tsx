import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <form className={styles.container}>
        <input 
            type="text"
            className={styles.searchBar} 
            placeholder="Search by Brand, Product, or Category"
        />
    </form>
  )
}

export default SearchBar


