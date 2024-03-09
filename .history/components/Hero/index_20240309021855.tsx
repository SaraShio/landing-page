import styles from "./Hero.module.css";
import Spline from '@splinetool/react-spline';


export default function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
      <Spline scene="https://prod.spline.design/84X5CYescQJtIvey/scene.splinecode" />

        <div className={styles.info_container}>
          <h1 className={styles.title}>Welcome!</h1>
          <h1 className={styles.subtitle}>Plan your day in Vancouver</h1>

<div  className={styles.download_button}>
<a 
            href="https://apps.apple.com/"
            target="_blank" 
            rel="noopener noreferrer" 
           >
            FREE DOWNLOAD
          </a>   </div>     
          </div>
      </div>
    </>
  );
}
