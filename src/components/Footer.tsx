import React from "react";

import styles from "./footer.module.scss";
import Link from "next/link";

const links = [
  {
    name: "Twitter",
    url: "x",
    icon: "x",
  },
  {
    name: "Instagram",
    url: "x",
    icon: "x",
  },
  {
    name: "Linkedin",
    url: "x",
    icon: "x",
  },
  {
    name: "Tiktok",
    url: "x",
    icon: "x",
  },
];

const Footer = () => {
  return (
    <footer className={`lightSection ${styles.footer}`}>
      <div>
        <h5>Redes Sociales</h5>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.name}>
                <img src={link.icon} />
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h5>Disclaimer</h5>
        <p>¡No nos hacemos responsables de nada!</p>
      </div>
      <span className={styles.copyright}>
        Tanto esta web como su contenido son copyright de Recosecha - ©
        Recosecha {new Date().getUTCFullYear()}. Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
