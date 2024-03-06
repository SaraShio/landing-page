import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
      <Image
            src="/images/test.jpeg"
            alt="VanPlan Logo"
            width={400}
            height={400}
          />
      </div>
    </>
  );
}
