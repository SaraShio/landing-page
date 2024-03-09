import Image from "next/image";
import styles from "./CardTwo.module.css";
import Spline from '@splinetool/react-spline';


export default function CardTwo() {
  return (
    <>
      <div className={styles.card_two_container}>
      <Spline scene="https://prod.spline.design/2PCaZmEtkPXfgC36/scene.splinecode" />
      <h1>Test Membership</h1>
      <p>Ready to dive a little deeper? The Testing Membership is designed for enthusiasts who are getting more serious about their van life adventures. This tier includes all the benefits of the Basic Membership, along with enhanced planning features, a broader array of detailed reviews, and exclusive content to enrich your travel experience. It's the perfect way to broaden your horizons!</p>

      <h1>$9.98/month</h1>

      <button className={styles.buy_button}>BUY NOW</button>
      </div>
    </>
  );
}
