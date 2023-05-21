import React from "react";
import { event } from "./Calendar";

import styles from "./moreInfoCard.module.scss";
import Link from "next/link";

const MoreInfoCard = ({ info }: { info: event }) => {
  return (
    <div className={styles.moreInfoCard}>
      <Link className={styles.inscribete} href="">
        ¡Inscribete!
      </Link>
      <img src={info.icon} />
      <h2 className={styles.cardTitle}>{info.title}</h2>
      <span className={styles.details}>
        {info.location} - {info.date}
      </span>
      <span>{info.description}</span>
    </div>
  );
};

export default MoreInfoCard;
