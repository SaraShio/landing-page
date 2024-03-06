import Image from "next/image";
import styles from "./CardOne.module.css";

export default function CardOne() {
  return (
    <>
      <div className={styles.card_one_container}>
      <Image src="/images/test3.jpeg" alt="Test" width={600} height={600} />

      </div>
    </>
  );
}
