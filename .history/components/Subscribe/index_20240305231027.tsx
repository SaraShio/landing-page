import Image from "next/image";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <main className={styles.subscribe_container}>
      <h1>Subscribe!</h1>

      <form>
        <input type="text" placeholder="Enter email..."></input>
      </form>
      <button className={styles.signup_button}>Sign Up</button>
    </main>
  );
}
