import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Unleash Your Entertainment Universe
        </h1>
        <p className={styles.desc}>
          Discover a personalized streaming experience tailored to your unique tastes.
        </p>
      </div>
    </div>
  );
}