import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container} >
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href={`/`}>
          <h1>
            scientific softly hungry share iron trunk selection
          </h1>
        </Link>
        <p className={styles.desc}>
            rough race stiff touch needle enemy where sing classroom principal won determine burst sink theory slightly post held harder great drawn kind chosen industry
        </p>
        <div
          className={styles.desc}
        
        />
        <Link href={`/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
