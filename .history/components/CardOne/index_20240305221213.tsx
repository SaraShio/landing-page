import Image from "next/image";
import styles from "./CardOne.module.css";

export default function CardOne() {
  return (
    <>
      <div className={styles.hero_container}>
        <Image src="/images/test.jpeg" alt="Test" width={600} height={600} />

        <div>
          <h1>VanPlan</h1>
          <h1>Plan your day according to the weather</h1>
          <button className={styles.download_button}>Download Today!</button>
        </div>
      </div>
    </>
  );
}
