import React, { useState } from "react"; 
import Image from "next/image";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  const [message, setMessage] = useState(""); 
  const [email, setEmail] = useState('');

  const handleClick = (e:any) => {
    e.preventDefault(); 
    setMessage("Thanks for signing up!"); 
  };

  return (
    <main className={styles.subscribe_container}>
      <h1>Subscribe!</h1>

      <form className={styles.input_container} onSubmit={handleClick}>
        <input type="text" placeholder="Enter email..."></input>
        <button className={styles.signup_button} type="submit">
          SIGN UP
        </button>
      </form>

      <div>
        {" "}
        {message && (
          <div className={styles.thank_you_message}>{message}</div>
        )}{" "}
      </div>
    </main>
  );
}
