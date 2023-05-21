"use client";

import React, { useEffect, useState } from "react";

import styles from "./calendar.module.scss";
import CalendarSheet from "./CalendarSheet";

interface event {
  date: string;
  location: string;
  title: string;
  icon: string;
}

const events = [
  {
    date: "2023-05-21",
    location: "Alicante",
    title: "Recogida de la alcachofa",
    icon: "images/IMG20230507192850.jpg",
  },
  {
    date: "2023-05-27",
    location: "Alicante",
    title: "Recogida de la alcachofa",
    icon: "images/IMG20230507192850.jpg",
  },
  {
    date: "2023-05-27",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507193254.jpg",
  },
  {
    date: "2023-06-10",
    location: "Alicante",
    title: "Recogida del limón",
    icon: "images/IMG20230507194409.jpg",
  },
  {
    date: "2023-06-10",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507192850.jpg",
  },
  {
    date: "2023-06-11",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507194409.jpg",
  },
  {
    date: "2023-06-11",
    location: "Torrevieja",
    title: "Recogida del Aguacate",
    icon: "images/IMG20230507192850.jpg",
  },
  {
    date: "2023-07-10",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507193254.jpg",
  },
];

const Calendar = () => {
  const [userInput, setUserInput] = useState("");
  const [showEvents, setShowEvents] = useState<event[]>([]);
  const [eventDates, setEventDates] = useState<string[]>([]);
  const setFilter = (filter: string): void => {
    if (userInput === filter) return setUserInput("");
    setUserInput(filter);
  };
  useEffect(() => {
    setShowEvents(() => (userInput !== "" ? events : events.slice(0, 4)));
    const setOfDates = new Set(events.map((e) => e.date));
    setEventDates([...setOfDates]);
  }, [userInput]);
  return (
    <>
      <section
        className={`lightSection ${styles.calendarSection}`}
        id="calendar"
      >
        <h3 className="sectionTitle">Próximos Eventos</h3>
        <div className={styles.filter}>
          <p>¡Comprueba nuestros próximos eventos aquí!</p>
          <CalendarSheet
            eventDates={eventDates}
            setFilter={setFilter}
            filter={userInput}
          ></CalendarSheet>
        </div>
        <div className={styles.events}>
          {showEvents
            .filter((event) => {
              return (
                userInput === "" ||
                event.title.toLowerCase().includes(userInput.toLowerCase()) ||
                event.date.includes(userInput) ||
                event.location.toLowerCase().includes(userInput.toLowerCase())
              );
            })
            .sort((a: event, b: event) => {
              return new Date(a.date) > new Date(b.date) ? 1 : -1;
            })
            .map((event) => {
              return (
                <div
                  key={event.title + event.location + event.date}
                  className={styles.event}
                >
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
    </>
  );
};

export default Calendar;
