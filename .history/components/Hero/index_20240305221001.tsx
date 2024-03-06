import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
        <Image src="/images/test.jpeg" alt="Test" width={600} height={600} />

        <div>
          <h1>VanPlan</h1>
          <h1>Plan your day according to the weather</h1>
          <button className={styles.}>Download Today!</button>
        </div>
      </div>
    </>
  );
}
