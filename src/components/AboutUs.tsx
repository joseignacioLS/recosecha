import React from "react";

import styles from "./aboutus.module.scss";

const people = [
  {
    name: "Carmen Jerez",
    picture: "images/people/carmen.webp",
    description: "Investigadora en biología experimental",
  },
  {
    name: "Cristina Bean",
    picture: "images/people/cristina.webp",
    description:
      "Project Manager con más de 10 años de experiencia en la gestión de proyectos Internacionales",
  },
];

const AboutUs = () => {
  return (
    <section className="darkSection">
      <h3 className="sectionTitle">Sobre nosotras</h3>
      <p className={styles.description}>
        Tras recosecha se encuentran dos biólogas comprometidas con la
        sostenibilidad y la lucha contra el desperdicio alimentario.
      </p>
      <div className={styles.people}>
        {people.map((person) => {
          return (
            <div className={styles.person}>
              <div className={styles.imgContainer}>
                <img src={person.picture} />
              </div>
              <h4>{person.name}</h4>
              <p>{person.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
