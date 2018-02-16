import React from 'react'
import Link from 'gatsby-link'
import styles from "./button.module.scss";

const Button = props =>
  <button className={styles.button}>
    {props.children}
  </button>

export default Button
