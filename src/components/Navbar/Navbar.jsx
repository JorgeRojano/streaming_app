"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Movies",
    url: "/movies",
  },
];

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Streaming
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log('logout')}>
          Logout
        </button>
      </div>
    </div>
  );
}
