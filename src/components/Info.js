import React from "react";
import styles from "./Info.module.css"
import Pfp from "../assets/unnamed.png";
import emaiLogo from "../assets/Email-logo.png";
import linkedinLogo from "../assets/LinkedIn-logo.png";

export default function Info() {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
           <img 
              className={styles.avatar}
              src={Pfp} 
              alt="Ilyas Filali"/> 
        </header>
        <div className={styles.bio}>
          <h1 className={styles.name}>Ilyas Filali</h1>
          <p className={styles.title}>Full-Stack Developer</p>
          <p className={styles.small}>Website in the making..</p>
          <div className={styles.contacts}>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.links} ${styles.email}`}
              href="mailto:ilyas.rafiqfilali@gmail.com"
            >
          <img className={styles.icons} src={emaiLogo} alt=" Email Logo"/> Email
            </a>

            <a 
              target="_blabk" 
              rel="noopener noreferrer" 
              className={`${styles.links} ${styles.linkedin}`} 
              href="https://www.linkedin.com/in/ilyas-filali-39989b236"
            >
          <img className={styles.icons} src={linkedinLogo} alt="Linkedin Logo"/> Linkedin
            </a>
          </div>
        </div>
    </div>
  );
}