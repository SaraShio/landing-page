import React, { useState } from 'react'; // Ensure React is imported
import Image from 'next/image';
import styles from './Subscribe.module.css';

export default function Subscribe() {
  const [message, setMessage] = useState(''); 
  const [email, setEmail] = useState(''); 

  const handleClick = (e:any) => {
    e.preventDefault(); 
    setMessage('Thanks for signing up!'); 
    setEmail('');
  };

  return (
    <main className={styles.subscribe_container}>
      <h1>Subscribe!</h1>

      <form className={styles.input_container} onSubmit={handleClick}>
        <input 
          type="text" 
          placeholder="Enter email..." 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} // Update the state on input change
        ></input>
        <button className={styles.signup_button} type="submit">
          SIGN UP
        </button>
      </form>

      <div> 
        {message && (
          <div className={styles.thank_you_message}>{message}</div>
        )} 
      </div>
    </main>
  );
}
