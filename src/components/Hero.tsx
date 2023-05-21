import React from "react";

import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgFilter}></div>
      <div className={styles.bgEffect}></div>
      <h1>
        <img src="/images/logo.png" alt="Logo de la marca Recosecha" />
      </h1>
      <h2>Conectando el campo con la ciudad</h2>
    </section>
  );
};

export default Hero;
