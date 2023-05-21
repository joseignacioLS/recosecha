import React from "react";

import styles from "./calendar.module.scss";

const events = [
  {
    date: "2023-07-01",
    location: "Alicante",
    title: "Recogida de la alcachofa",
    icon: "images/calendar.svg",
  },
  {
    date: "2023-07-05",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/calendar.svg",
  },
];

const Calendar = () => {
  return (
    <section className="lightSection">
      <h3 className="sectionTitle">Próximos Eventos</h3>
      <div className={styles.events}>
        {events.map((event) => {
          return (
            <div key={event.title} className={styles.event}>
              <img src={event.icon} />
              <span className={styles.title}>{event.title}</span>
              <span className={styles.location}>{event.location}</span>
              <span className={styles.date}>{event.date}</span>
              <span className={styles.more}>Más info</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Calendar;
