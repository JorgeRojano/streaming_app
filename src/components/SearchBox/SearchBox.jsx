import styles from "./searchbox.module.css";

const SearchBox = () => {
  return (
    <form className={styles.form}>
      <input
        type="search"
        id="mySearch"
        name="q"
        placeholder="Search the site…"
        className={styles.input}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchBox;
