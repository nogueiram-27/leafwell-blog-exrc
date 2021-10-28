import React from "react";

import styles from "../styles/AboutUs.module.css";

const AboutUs = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, idx) => (
        <p key={idx} className={styles.paragraph}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default AboutUs;
