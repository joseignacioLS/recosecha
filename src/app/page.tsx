import AboutUs from "@/components/AboutUs";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar/Calendar";
import Info from "@/components/Info";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Info />
        <Calendar />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
