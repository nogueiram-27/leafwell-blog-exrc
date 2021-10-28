import React from "react";

import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <p className={`${styles.paragraph} ${styles.bold}`}>Leafwell HQ</p>
        <p className={styles.paragraph}>Address: 3680 Wilshire Blvd.</p>
        <p className={styles.paragraph}>Los Angeles, California, 90010</p>
      </div>
      <div className={styles.footer}>
        <p className={`${styles.paragraph} ${styles.margin}`}>
          Phone: +1 (800) 660-9085
        </p>
        <p className={styles.paragraph}>
          {" "}
          ©2021 Leafwell . Pepperjam Verification. Note: Information on this
          site does not constitute medical advice.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
