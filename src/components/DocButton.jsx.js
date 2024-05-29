import React from 'react';
import Link from '@docusaurus/Link';
import styles from './DocButton.module.css'; 

const DocButton = ({ logo, title, description, to }) => (
  <div className={styles.button}>
    {logo && <img src={logo} alt={title} className={styles.logo} />}
    <div className={styles.content}>
      <h3 className={styles.header}>{title}</h3>
      <p className={styles.text}>{description}</p>
    </div>
    <Link to={to} className={styles.link}>
      Learn More
    </Link>
  </div>
);

export default DocButton;
