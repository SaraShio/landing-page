import Image from "next/image";
import styles from "./CardTwo.module.css";

export default function CardTwo() {
  return (
    <>
      <div className={styles.card_one_container}>
      <Image src="/images/test4.svg" alt="Test" width={100} height={100} />
      <h1>Basic Membership</h1>
      <p>Our Basic Membership is ideal for those new to van life or who enjoy occasional escapes into nature. This entry-level option provides you with essential route planning tools, access to community forums, and a curated selection of campsite reviews. It's the perfect way to get your wheels rolling and start exploring with confidence and community support.</p>

      <h1>$0/Month</h1>

      <button>Buy Now</button>
      </div>
    </>
  );
}
