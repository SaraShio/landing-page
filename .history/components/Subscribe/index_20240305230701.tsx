import Image from "next/image";
import styles from "./SubBanner.module.css";


export default function SubBanner() {
  return (
    <main className={styles.sub_banner_container}>

    <h1>Subscribe!</h1>

    <Image src="/images/test6.svg" alt="Test" width={100} height={100} />

    
    </main>
  );
}
