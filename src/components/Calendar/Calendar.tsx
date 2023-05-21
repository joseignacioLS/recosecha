"use client";

import React, { useContext, useEffect, useState } from "react";

import styles from "./calendar.module.scss";
import CalendarSheet from "./CalendarSheet";
import { ModalContext } from "@/contexts/modal.context";
import MoreInfoCard from "./MoreInfoCard";
import { event, getAllEvents } from "@/services/api.service";

const Calendar = () => {
  const [userInput, setUserInput] = useState("");
  const [showEvents, setShowEvents] = useState<event[]>([]);
  const [eventDates, setEventDates] = useState<string[]>([]);

  const { showModal } = useContext(ModalContext);

  const setFilter = (filter: string): void => {
    setTimeout(() => {
      setUserInput(userInput === filter ? "" : filter);
    }, 0);
  };
  useEffect(() => {
    const allEvents = getAllEvents();
    setShowEvents(() => (userInput !== "" ? allEvents : allEvents.slice(0, 6)));
    const setOfDates = new Set(allEvents.map((e) => e.date));
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
          <p>
            {userInput === ""
              ? "Mostrando los próximos eventos, selecciona una fecha para ver más"
              : `Mostrando los eventos del día ${userInput}`}
          </p>
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
                  onClick={() => showModal(<MoreInfoCard info={event} />)}
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
