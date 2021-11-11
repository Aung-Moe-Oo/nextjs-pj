import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Aung Creatives.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passhref="true" className={styles.link}>
            <>
              <span className={styles.linkText}>Work with us</span>
              <Image src={`/img/link.png`} width="40px" height="40px" />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          LOIKAW <br /> MYANMAR
        </div>
        <div className={styles.cardItem}>
          contact@aung.com <br />
          09123456789
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          <span>FOLLOW US</span>
          <br />
          <Image src={`/img/twitter.png`} alt="logo" width="30" height="30" />
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 AUNG INTERACTIVE
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
