"use client";

import React, { useContext, useEffect, useState } from "react";

import styles from "./calendar.module.scss";
import CalendarSheet from "./CalendarSheet";
import { ModalContext } from "@/contexts/modal.context";
import MoreInfoCard from "./MoreInfoCard";

export interface event {
  date: string;
  location: string;
  title: string;
  icon: string;
  description: string;
}

const events = [
  {
    date: "2023-05-21",
    location: "Alicante",
    title: "Recogida de la alcachofa",
    icon: "images/IMG20230507192850.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
  {
    date: "2023-05-27",
    location: "Alicante",
    title: "Recogida de la alcachofa",
    icon: "images/IMG20230507192850.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
  {
    date: "2023-05-27",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507193254.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
  {
    date: "2023-06-10",
    location: "Alicante",
    title: "Recogida del limón",
    icon: "images/IMG20230507194409.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
  {
    date: "2023-06-10",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507192850.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
  {
    date: "2023-06-11",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507194409.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
  {
    date: "2023-06-11",
    location: "Torrevieja",
    title: "Recogida del Aguacate",
    icon: "images/IMG20230507192850.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
  {
    date: "2023-07-10",
    location: "Torrevieja",
    title: "Recogida del limón",
    icon: "images/IMG20230507193254.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non consequat ex. Nulla ut enim vitae purus condimentum iaculis. Phasellus convallis nulla erat, vel ornare dui ornare ut. Sed auctor vestibulum ipsum in auctor. Maecenas purus mauris, rhoncus id tincidunt ac, vehicula et tortor. Suspendisse potenti. Suspendisse erat quam, sodales sit amet est et, vehicula vestibulum lorem. Pellentesque maximus ex at tempus feugiat. Nam cursus arcu dui, at elementum turpis sagittis commodo. Nulla efficitur iaculis massa, vitae lacinia leo porta at. Donec a odio nec urna fringilla semper. Maecenas lorem massa, hendrerit in lobortis vitae, porta ut lectus. Pellentesque egestas in nisi luctus pulvinar. Quisque sagittis, justo et tempus sagittis, est nulla mattis sem, id tincidunt dolor eros molestie nibh. Sed finibus non odio in tempor. Aliquam augue tortor, sollicitudin in tortor non, luctus fermentum risus. Aliquam condimentum porta ipsum at tincidunt. In hendrerit vitae turpis in ultricies. Nulla facilisi. Praesent lobortis convallis porta. Sed sed semper velit, id cursus neque. Mauris ac fringilla nulla. Vivamus vulputate faucibus dolor vitae ultricies. Pellentesque egestas rutrum blandit. Vivamus pellentesque metus eu consequat molestie. Nulla et neque fermentum, mollis ligula ut, pharetra nisl. Nulla facilisi. Phasellus in nisi diam. Curabitur dictum urna in lacus elementum dictum gravida at nisl. Nam et leo turpis. Donec lectus neque, sodales vel interdum ac, euismod nec leo. Ut accumsan sem nec tellus dignissim, a suscipit lectus lacinia. Morbi scelerisque massa sed leo tincidunt congue. Etiam eu augue posuere turpis sollicitudin molestie et at ipsum. Vivamus pulvinar nisl sed felis ullamcorper pellentesque. Sed elementum tempus arcu et eleifend. Sed ut tincidunt sem. Etiam lobortis pretium orci, at malesuada magna condimentum sit amet. In et molestie metus, non finibus arcu. Etiam semper tellus eros, eu maximus nisl faucibus quis. Aenean consectetur eu leo ut consequat. Vestibulum efficitur quis urna sed auctor. Quisque convallis dolor quis vestibulum varius. Integer consequat enim id fermentum semper. Donec auctor ipsum eget tristique facilisis. Integer euismod mauris nunc, in fringilla nisl pulvinar sit amet. Nulla facilisi. Cras orci dolor, varius ac eros quis, elementum viverra dui. Praesent eget arcu vel diam consectetur eleifend. Etiam in nibh non purus tristique posuere. Donec laoreet orci lacus, sit amet malesuada lorem ullamcorper vel.",
  },
];

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
    setShowEvents(() => (userInput !== "" ? events : events.slice(0, 5)));
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
          <p>
            {userInput === ""
              ? "Mostrando los próximos 5 eventos, selecciona una fecha para ver más"
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
