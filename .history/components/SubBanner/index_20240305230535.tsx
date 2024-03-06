import Image from "next/image";
import styles from "./Subscribe.module.css";


export default function Subscribe() {
  return (
    <main className={styles.sub_banner_container}>

    <h1>Get updates instantly so you can make an informed decision while you are planning your day! We use OpenWeather API so you can be assured the information is correct! And TripAdvisor API to get you the information on the location you want!</h1>

    <Image src="/images/test6.svg" alt="Test" width={100} height={100} />

    
    </main>
  );
}
