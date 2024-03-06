import Image from "next/image";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <main className={styles.subscribe_container}>
      <h1>Subscribe!</h1>

      <form className={styles.input_container}>
        <input type="text" placeholder="Enter email..."></input>
        <button className={styles.signup_button}>Sign Up</button>
      </form>

    </main>
  );
}
