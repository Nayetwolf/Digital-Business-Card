import React from "react";
import styles from "./Interest.module.css"

export default function Interest () {
  return (
     <main className={styles.interest}>
       <h2 className={styles.header}>Interests</h2>
       <p className={styles.texts}>
        I am very curious and I love exploring things, i also love meeting new and interesting people. If you find anything I've written here interesting, feel free to DM on Twitter or email me. with your thoughts
       </p>
     </main>
  );
}