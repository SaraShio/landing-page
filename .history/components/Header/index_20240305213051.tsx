import Image from 'next/image';
import styles from '/Header.module.css';


export default function Header(){
    return (
        <>
           <div className="logo_img">
          <Image src="/images/green_logo.svg" alt="VanPlan Logo" width={400} height={400} />
        </div>
        <button className="signup_button">Sign Up</button>
        </>
    )
} s