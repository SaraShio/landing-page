import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
        <Image
            src="/images/test.jpeg"
            alt="Test"
            width={600}
            height={600}
        />

        <h1>Plan According to the Weather</h1>
      </div>
    </>
  );
}
