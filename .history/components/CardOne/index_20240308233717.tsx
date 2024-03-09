import Image from "next/image";
import styles from "./CardOne.module.css";
import Spline from '@splinetool/react-spline';


export default function CardOne() {
  return (
    <>
      <div className={styles.card_one_container}>
      <Spline scene="https://prod.spline.design/W1iOH7ObfQnLzpTR/scene.splinecode"/>
        <h1>Basic Membership</h1>
        <p>
          Our Basic Membership is ideal for those new to van life or who enjoy
          occasional escapes into nature. This entry-level option provides you
          with essential route planning tools, access to community forums, and a
          curated selection of campsite reviews. It's the perfect way to get
          your wheels rolling and start exploring with confidence and community
          support.
        </p>

        <h1>$0/month</h1>

        <button className={styles.buy_button}>BUY NOW</button>
      </div>
    </>
  );
}
