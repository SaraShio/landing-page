import React, { useState } from 'react'; 
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [message, setMessage] = useState(''); 
  const [email, setEmail] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setMessage('Thanks for signing up!'); // Set the message
    setEmail(''); // Clear the email input field
  };

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
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Enter email..." 
              value={email} // Set the value to the email state variable
              onChange={(e) => setEmail(e.target.value)} // Update the email state when the input changes
            ></input>
            <button className={styles.signup_button} type="submit">
              SIGN UP
            </button>
          </form>
          {message && <div className={styles.thank_you_message}>{message}</div>}
        </div>
      </div>
    </>
  );
}
