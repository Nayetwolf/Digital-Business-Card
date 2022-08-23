import React from "react";
import styles from "./About.module.css"

export default function About() {
  return (
     <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
          <p className={styles.texts}>A passionate programmer, studious self-starter with a love
          for all things computing related matter. My passion for
          development stems from a penchant for learning;
          aptitude for problem solving and a need to create.
          </p>
     </main>
  )
}