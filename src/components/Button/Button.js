import React from 'react';
import styles from './button.module.scss';
import cardboard from '../../assets/cardboard.svg';
import PropTypes from 'prop-types';

const Button = props => (
  <a href={props.link} className={styles.button}>
    <span className={styles.content}>
      <img className={styles.cardboardImg} src={cardboard} alt="" />
      {props.children}
    </span>
  </a>
);

Button.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
