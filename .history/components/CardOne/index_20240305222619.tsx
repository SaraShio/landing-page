import Image from "next/image";
import styles from "./CardOne.module.css";

export default function CardOne() {
  return (
    <>
      <div className={styles.card_one_container}>
      <Image src="/images/test3.svg" alt="Test" width={200} height={600} />

      </div>
    </>
  );
}
