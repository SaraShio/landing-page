import { style } from "@mui/system";
import Image from "next/image";
import styles from "./Hero.module.css";
import Spline from '@splinetool/react-spline';


export default function Hero() {
  return (
    <>
    <Spline scene="https://prod.spline.design/84X5CYescQJtIvey/scene.splinecode" />

      <div className={styles.hero_container}>
      <Spline scene="https://prod.spline.design/84X5CYescQJtIvey/scene.splinecode" />

        <div className={styles.info_container}>
          <h1 className={styles.title}>Welcome!</h1>
          <h1 className={styles.subtitle}>Plan your day in Vancouver</h1>

          <button className={styles.download_button}>FREE DOWNLOAD</button>
        </div>
      </div>
    </>
  );
}
