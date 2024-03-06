import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
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

        <form>
            <input >
            
            </input>
        </form>
        <button className={styles.signup_button}>Sign Up</button>
      </div>
    </>
  );
}
