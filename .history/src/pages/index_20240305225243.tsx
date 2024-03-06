import Image from "next/image";
//import styles from './Home.module.css';

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CardOne from "../../components/CardOne";
import CardTwo from "../../components/CardTwo";
import CardThree from "../../components/CardThree";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className={styles.}>
      <Header />

      <Hero/>

      <div>
      <CardOne/>
      <CardTwo/>
      <CardThree/>
      </div>


      <Footer />
    </main>
  );
}
