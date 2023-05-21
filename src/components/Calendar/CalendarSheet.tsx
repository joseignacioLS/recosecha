import React, { useEffect, useState } from "react";

import styles from "./calendarsheet.module.scss";
const daysInWeek = ["L", "M", "X", "J", "V", "S", "D"];

const CalendarSheet = ({
  eventDates,
  setFilter,
  filter,
}: {
  eventDates: string[];
  setFilter: (filter: string) => void;
  filter: string;
}) => {
  const [originDate, setOriginDate] = useState(new Date());
  useEffect(() => {
    const dayOfTheWeek = originDate.getDay() > 0 ? originDate.getDay() : 7;
    if (dayOfTheWeek !== 1) {
      setOriginDate(() => {
        const newDate = new Date(originDate);
        newDate.setDate(newDate.getDate() - (dayOfTheWeek - 1));
        return newDate;
      });
    }
  }, []);

  return (
    <div className={styles.calendarSheet}>
      <div className={`${styles.header} ${styles.week}`}>
        {daysInWeek.map((day) => {
          return <span key={day}>{day}</span>;
        })}
      </div>
      {[0, 1, 2, 3].map((week) => {
        return (
          <div key={week} className={styles.week}>
            {[0, 1, 2, 3, 4, 5, 6].map((day) => {
              const date = new Date(originDate);
              date.setDate(originDate.getDate() + week * 7 + day);
              const dateYear = date.getUTCFullYear().toString();
              let dateMonth = (date.getUTCMonth() + 1).toString();
              let dateDay = date.getUTCDate().toString();

              if (dateMonth.length < 2) dateMonth = "0" + dateMonth;
              if (dateDay.length < 2) dateDay = "0" + dateDay;
              const stringDate = `${dateYear}-${dateMonth}-${dateDay}`;
              const hasEvent = eventDates.includes(stringDate);
              const isSelected = stringDate === filter;
              return (
                <span
                  key={`${week},${day}`}
                  className={`${hasEvent ? styles.hasEvent : ""} ${
                    date.toLocaleDateString() ===
                    new Date().toLocaleDateString()
                      ? styles.today
                      : ""
                  } 
                  ${isSelected ? styles.selected : ""}`}
                  onClick={() => {
                    hasEvent ? setFilter(stringDate) : null;
                  }}
                >
                  {date.getUTCDate()}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarSheet;
