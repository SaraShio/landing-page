import React, { useState } from 'react'; 
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [message, setMessage] = useState(''); 
  const [email, setEmail] = useState(''); 

  const handleClick = (e:any) => {
    e.preventDefault(); 
    setMessage('Thanks for signing up!'); 
    setEmail('');
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
        <form>
            <input type="text" placeholder="Enter email...">
            
            </input>
        </form>
        <button className={styles.signup_button}>SIGN UP</button>
        </div>
      </div>
    </>
  );
}
