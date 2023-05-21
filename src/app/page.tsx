"use client";

import AboutUs from "@/components/AboutUs";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar/Calendar";
import Info from "@/components/Info";
import Modal from "@/components/Modal";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modal.context";

const Home = () => {
  const { isVisible } = useContext(ModalContext);
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Info />
        <Calendar />
        <AboutUs />
      </main>
      <Footer />
      {isVisible && <Modal />}
    </>
  );
};

export default Home;
