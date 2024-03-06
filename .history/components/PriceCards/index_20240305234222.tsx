import styles from './Footer.module.css';

import CardOne from "../CardOne";
import CardTwo from "../CardTwo";
import CardThree from "../CardThree";

export default function PriceCards() {
  return (
    <>
      <div>
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </>
  );
}
