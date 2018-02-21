import React from "react";
import styles from "./call-to-action.module.scss";
import arrowCallout from "../../assets/arrow-callout.png";

const CallToAction = () => (
  <article className={styles.callToAction}>
    <h2 className={styles.title}>
      You can create WebVR content. <br />We’ll help.
    </h2>
    <ul className={styles.list}>
      <li>Show off your campus to prospective students.</li>
      <li>Give more impact to your journalism with 360° video.</li>
      <li>Explore real estate with potential buyers.</li>
      <li>Create a memorable experience to promote your brand.</li>
      <li>Take your training videos to the next level.</li>
    </ul>
    <p className={styles.buttonContainer}>
      <a href="#" className={styles.button}>
        GET IN TOUCH
      </a>
      <img
        className={styles.handwriting}
        src={arrowCallout}
        alt="With a real person, not a virtual one."
      />
    </p>
  </article>
);

export default CallToAction;
