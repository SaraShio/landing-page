import Image from "next/image";
import styles from './Home.module.css'; 

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CardOne from "../../components/CardOne";
import CardTwo from "../../components/CardTwo";
import CardThree from "../../components/CardThree";
import SubBanner from "../../components/SubBanner";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Header />

      <Hero/>

      <div >
      <CardOne/>
      <CardTwo/>
      <CardThree/>
      </div>

      <SubBanner/>

      <Subscribe/>

      <Footer />
    </main>
  );
}


import Spline from '@splinetool/react-spline';

import Image from "next/image";
import styles from './Home.module.css'; 

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PriceCards from '../../components/PriceCards';
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
