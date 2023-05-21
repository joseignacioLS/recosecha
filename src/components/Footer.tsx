import React from "react";

import styles from "./footer.module.scss";
import Link from "next/link";

const links = [
  {
    name: "Twitter",
    url: "",
    icon: "images/rrss/twitter.svg",
  },
  {
    name: "Instagram",
    url: "",
    icon: "images/rrss/instagram.svg",
  },
  {
    name: "Linkedin",
    url: "",
    icon: "images/rrss/linkedin.svg",
  },
  {
    name: "Tiktok",
    url: "",
    icon: "images/rrss/tiktok.svg",
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
              <li key={link.name} className={styles.rrssLink}>
                <img src={link.icon} />
                <Link href={link.url} target="_blank">{link.name}</Link>
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
