import Image from "next/image";
import styles from "./CardThree.module.css";
import Spline from '@splinetool/react-spline';


export default function CardThree() {
  return (
    <>
      <div className={styles.card_three_container}>
        <Image src="/images/test4.svg" alt="Test" width={100} height={100} />
        <h1>Premium Membership</h1>
        <p>
          For the ultimate van life experience, our Premium Membership offers
          unparalleled access to every tool and resource VanPlan has to offer.
          Enjoy comprehensive route planning capabilities, full access to all
          campsite and service reviews, personalized recommendations, and
          exclusive discounts on gear and services. Premium members also benefit
          from one-on-one support to ensure every trip is flawless. If van life
          is not just a hobby, but a lifestyle for you, then the Premium
          Membership is your key to freedom and adventure.
        </p>

        <h1>$0/month</h1>

        <button className={styles.buy_button}>BUY NOW</button>
      </div>
    </>
  );
}
