import SearchBox from "@/components/SearchBox/SearchBox";
import styles from "./page.module.css";
import Image from "next/image";

const Movies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <SearchBox />
      </div>
      <div className={styles.movies}>
        <div className={styles.movie}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/illustration.png"
              alt=""
            />
          </div>
          <div className={styles.title}>Title Movie</div>
        </div>
        <div className={styles.movie}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/illustration.png"
              alt=""
            />
          </div>
          <div className={styles.title}>Title Movie</div>
        </div>
        <div className={styles.movie}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/illustration.png"
              alt=""
            />
          </div>
          <div className={styles.title}>Title Movie</div>
        </div>
        <div className={styles.movie}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/illustration.png"
              alt=""
            />
          </div>
          <div className={styles.title}>Title Movie</div>
        </div>
        <div className={styles.movie}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src='/illustration.png' alt="" />
          </div>
          <div className={styles.title}>Title Movie</div>
        </div>
        <div className={styles.movie}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src='/illustration.png' alt="" />
          </div>
          <div className={styles.title}>Title Movie</div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
