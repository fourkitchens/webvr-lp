import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import classNames from 'classnames';
import styles from './strata.module.scss';

const cx = classNames.bind(styles);

const getStrataContentClass = displaySideRight =>
  cx(styles.strata, {
    [styles.contentLeft]: !displaySideRight,
  });

const header = (headerImage, headline) => {
  if (headerImage) {
    return <img src={headerImage} alt="" />;
  }
  if (headline) {
    return <h2 className={styles.headline}>{headline}</h2>;
  }
};

const Strata = props => (
  <article
    className={getStrataContentClass(props.displaySideRight)}
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    <section className={styles.content}>
      {header(props.headerImage, props.headline)}
      <p>{props.paragraph}</p>
      <Button link="/page-2">Enter</Button>
    </section>
  </article>
);

Strata.defaultProps = { headerImage: '', headline: '' };

Strata.propTypes = {
  displaySideRight: PropTypes.bool.isRequired,
  headerImage: PropTypes.string,
  headline: PropTypes.string,
  paragraph: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Strata;
