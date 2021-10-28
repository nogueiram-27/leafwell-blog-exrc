import { style } from "dom-helpers";
import React from "react";
import { Logo, Heading, Button } from "@leafwell/components";

import styles from "../styles/Subscription.module.css";

const Subscription = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.horizontal} />
      <p className={styles.paragraph}>
        <span>Your resource for everything &nbsp;</span>
        <Logo variant="icon" width={24} /> <span>&nbsp;cannabis</span>
      </p>
      <div className={styles.formWrapper}>
        <Heading level="2">Subscribe</Heading>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email address"
          />
          <Button label="Subscribe" rounded variant="primary" />
        </form>
      </div>
      <hr className={styles.horizontal} />
    </div>
  );
};

export default Subscription;
