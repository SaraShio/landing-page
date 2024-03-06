import Image from "next/image";
import styles from "./CardTwo.module.css";

export default function CardTwo() {
  return (
    <>
      <div className={styles.card_two_container}>
      <Image src="/images/test3.svg" alt="Test" width={100} height={100} />
      <h1>Test the Waters Membership</h1>
      <p>Ready to dive a little deeper? The Testing the Waters Membership is designed for enthusiasts who are getting more serious about their van life adventures. This tier includes all the benefits of the Basic Membership, along with enhanced planning features, a broader array of detailed reviews, and exclusive content to enrich your travel experience. It's the perfect way to broaden your horizons and make your travels even more rewarding.</p>

      <h1>$9.98/Month</h1>

      <button className={styles.buy_button}>Buy Now</button>
      </div>
    </>
  );
}
