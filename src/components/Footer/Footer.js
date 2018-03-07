import React from 'react';
import styles from './footer.module.scss';
import logo from '../../assets/4k-logo-reversed.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://www.fourkitchens.com/">
      <img src={logo} alt="Four Kitchens logo" className={styles.logo} />
    </a>
    <ul className={styles.nav}>
      <li>
        <a href="https://www.fourkitchens.com/portfolio/">Portfolio</a>
      </li>
      <li>
        <a href="https://www.fourkitchens.com/knowledge/">Knowledge</a>
      </li>
      <li>
        <a href="https://www.fourkitchens.com/team/">Team</a>
      </li>
      <li>
        <a href="https://www.fourkitchens.com/blog/">Blog</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
