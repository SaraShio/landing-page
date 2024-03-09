import styles from './Hero.module.css'; 

export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <h1 className={styles.hero_title}>Welcome to Our Service</h1>
      <h2 className={styles.hero_subtitle}>Start Your Journey With Us</h2>
      <p className={styles.hero_description}>
        Discover the ultimate platform for your needs. We provide personalized solutions and expert advice to help you achieve your goals.
      </p>
      <button className={styles.hero_button}>Get Started</button>
    </div>
  );
}
