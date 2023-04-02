import React from 'react';
import styles from "./Footer.module.scss";
import linkedin from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';
import instagram from '../../assets/images/instagram.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://www.linkedin.com/in/alyson-eiti"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin icon" />
        </a>
        <a
          href="https://github.com/AlysonEiti"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github icon" />
        </a>
        <a
          href="https://www.instagram.com/alyson.eiti/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram icon" />
        </a>
      </div>
      <p>Powered by Alyson Eiti</p>
    </footer>
  );
}
