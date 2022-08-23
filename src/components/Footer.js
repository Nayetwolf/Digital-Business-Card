import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Nayetwolf" 
            className={styles.links}
            >
            <FontAwesomeIcon 
              icon={faGithub} 
              className={styles.socialIcons}>
            </FontAwesomeIcon>
        </a>

        <a  
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/nayetwolf/" 
            className={styles.links}
            >
            <FontAwesomeIcon 
              icon={faInstagram} 
              className={styles.socialIcons}>
            </FontAwesomeIcon>
        </a>

        <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Nayetwolf" 
            className={styles.links}
            >         
            <FontAwesomeIcon 
              icon={faTwitter} 
              className={styles.socialIcons}>
            </FontAwesomeIcon>
        </a>

        <a
            target="_blank"
            rel="noopener noreferrer"
            href="#" 
            className={styles.links}
            >
            <FontAwesomeIcon 
              icon={faGoogle} 
              className={styles.socialIcons}>
            </FontAwesomeIcon>
        </a>

      </div>
    </footer>
  )
}

