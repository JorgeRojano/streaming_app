import Image from 'next/image';
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Jorge Rojano. All rights reserved.</div>
      <div className={styles.social}>
        <Image src='/1.png' className={styles.icon} width={15} height={15} alt='facebook'/>
        <Image src='/2.png' className={styles.icon} width={15} height={15} alt='instagram'/>
        <Image src='/3.png' className={styles.icon} width={15} height={15} alt='twitter'/>
        <Image src='/4.png' className={styles.icon} width={15} height={15} alt='youtube'/>
      </div>
    </div>
  );
}
