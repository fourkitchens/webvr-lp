import React from "react";
import Button from "../Button/Button";
import fourkitchensLogo from "../../assets/4k-logo.svg";
import viewer from "../../assets/cardboard-viewer.png";
import styles from "./splash.module.scss";

const Splash = () => (
  <header className={styles.splash}>
    <section className={styles.section}>
      <img
        src={fourkitchensLogo}
        alt="Four Kitchens Logo"
        className={styles.logo}
      />
      <h1 className={styles.title}>
        We create WebVR <span className={styles.nowrap}>for Everyone.</span>
      </h1>
      <h2 className={styles.subhead}>
        Explore the experiences we’ve made using <br className={styles.break} />{" "}
        the phone & computer you already have.
      </h2>
      <Button link="/page-2">View This Page in VR</Button>
    </section>
    <img src={viewer} alt="Cardboard VR Viewer" className={styles.viewer} />
  </header>
);

export default Splash;
