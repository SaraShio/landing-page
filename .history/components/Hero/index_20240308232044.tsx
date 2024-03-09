import { style } from "@mui/system";
import Image from "next/image";
import styles from "./Hero.module.css";

import Spline from '@splinetool/react-spline';


export default function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
        <Image src="/images/test1.jpeg" alt="Test" width={600} height={600} />

        <div className={styles.info_container}>
          <h1 className={styles.title}>Welcome!</h1>
          <h1 className={styles.subtitle}>Plan your day in<br></br>Vancouver</h1>

          <button className={styles.download_button}>FREE DOWNLOAD</button>
        </div>
      </div>
    </>
  );
}
