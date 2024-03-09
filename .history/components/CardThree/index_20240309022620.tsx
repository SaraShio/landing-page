import Image from "next/image";
import styles from "./CardThree.module.css";
import Spline from '@splinetool/react-spline';


export default function CardThree() {
  return (
    <>
      <div className={styles.card_three_container}>
      <Spline scene="https://prod.spline.design/M5YVoOKa9K1Tw4RS/scene.splinecode" />
        <h1>Premium Membership</h1>
        <p>
        For the ultimate van life experience, our Premium Membership offers access to every tool and resource VanPlan has to offer. Enjoy route planning capabilities, full access to all service reviews, recommendations, and discounts on gear and services. Members also benefit from direct support and advice from experienced van lifers, ensuring you get the most out of your adventures.
        </p>

        <h1>$49.98/month</h1>

        <button className={styles.buy_button}>BUY NOW</button>
      </div>
    </>
  );
}
