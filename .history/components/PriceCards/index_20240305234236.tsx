import styles from './PriceCards.module.css';

import CardOne from "../CardOne";
import CardTwo from "../CardTwo";
import CardThree from "../CardThree";

export default function PriceCards() {
  return (
    <>
      <div className={styles.}>
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </>
  );
}
