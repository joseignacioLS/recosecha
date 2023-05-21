import React from "react";

import styles from "./hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={`mobileWholeScreenSection ${styles.hero}`}>
      <div className={styles.bgFilter}></div>
      <div className={styles.bgEffect}></div>
      <Link href="/">
        <h1>
          <img src="/images/logo.png" alt="Logo de la marca Recosecha" />
        </h1>
      </Link>
      <h2>Conectando el campo con la ciudad</h2>
    </section>
  );
};

export default Hero;
