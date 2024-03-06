import Spline from '@splinetool/react-spline';

import Image from "next/image";
import styles from './Home.module.css'; 

import Header from "../../components/Header";
import Hero from "../../components/Hero";

import SubBanner from "../../components/SubBanner";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Hero/>

      <PriceCards/>

      <SubBanner/>

      <Subscribe/>

      <Footer />
    </main>
  );
}
