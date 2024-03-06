import Image from "next/image";
import styles from "./Header.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logo_img}>
          <Image
            src="/images/green_logo.svg"
            alt="VanPlan Logo"
            width={400}
            height={400}
          />
        </div>

        <div className={styles.input_container}>
        <form>
            <input type="text" placeholder="Enter email...">
            
            </input>
        </form>
        <button className={styles.signup_button}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
