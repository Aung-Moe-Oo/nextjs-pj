import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#0b38ff7f" top="-50vh" left="-20vh" />
      <Circle backgroundColor="yellow" bottom="-30vh" right="0vh" />

      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AUNG</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, non.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>

      <div className={styles.card}>
        <Image
          priority="true"
          src="/img/intro.svg"
          layout="fill"
          objectFit="cover"
          alt="Aung"
        />
      </div>
    </div>
  );
};

export default Intro;
