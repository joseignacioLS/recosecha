import React from "react";

import styles from "./moreInfoCard.module.scss";
import Link from "next/link";
import { event } from "@/services/api.service";

const MoreInfoCard = ({ info }: { info: event }) => {
  return (
    <div className={styles.moreInfoCard}>
      <button className={styles.inscribete}>
        <Link href={`/inscripcion?id=${info.id}`}>¡Inscribete!</Link>
      </button>
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
