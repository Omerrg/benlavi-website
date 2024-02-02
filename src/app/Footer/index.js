import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <span className={styles.footer}>
    <img src={'instagram.svg'} />
    <img src={'spotify.svg'} />
    <img src={'youtube.png'} />
    <img src={'radio.svg'} />
  </span>
)

export default Footer;
