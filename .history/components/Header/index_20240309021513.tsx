import React, { useState } from 'react'; 
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [email, setEmail] = useState(''); 
  const [placeholder, setPlaceholder] = useState('Enter email...'); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setPlaceholder('Thanks for signing up!'); // Change the placeholder text
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
              placeholder={placeholder} // Use state variable for placeholder
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button className={styles.signup_button} type="submit">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
