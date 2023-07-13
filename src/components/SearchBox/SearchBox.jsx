import styles from "./searchbox.module.css";

const SearchBox = ({value, onSearch}) => {
  const handleSearch = (e) => {
    onSearch(e.target.value)
  }

  return (
    <form className={styles.form}>
      <input
        type="search"
        id="mySearch"
        placeholder="Search the site…"
        className={styles.input}
        value={value}
        onChange={handleSearch}
      />
      {/* <button className={styles.button}>Search</button> */}
    </form>
  );
};

export default SearchBox;
