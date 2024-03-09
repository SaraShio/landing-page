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
          For the ultimate van life experience, our Premium Membership offers
          unparalleled access to every tool and resource VanPlan has to offer.
          Enjoy comprehensive route planning capabilities, full access to all
          h and service reviews, personalized recommendations, and
          exclusive discounts on gear and services. 
        </p>

        <h1>$0/month</h1>

        <button className={styles.buy_button}>BUY NOW</button>
      </div>
    </>
  );
}
