import styles from './PriceCards.module.css';

import CardOne from "../CardOne";
import CardTwo from "../CardTwo";
import CardThree from "../CardThree";

export default function PriceCards() {
  return (
    <>
      <div className={styles.price_card_container}>
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </>
  );
}
