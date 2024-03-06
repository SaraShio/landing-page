import Image from "next/image";
import styles from "./Subscribe.module.css";


export default function Subscribe() {
  return (
    <main className={styles.subscribe_container}>

    <h1>Subscribe!</h1>

    <Image src="/images/test6.svg" alt="Test" width={100} height={100} />

    
    </main>
  );
}
