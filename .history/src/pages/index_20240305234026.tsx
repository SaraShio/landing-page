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
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`>
      <Header />

      <Hero/>

      <PriceCards/>

      <SubBanner/>

      <Subscribe/>

      <Footer />
    </main>
  );
}
