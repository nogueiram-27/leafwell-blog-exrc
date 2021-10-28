import React from "react";
import Image from "next/image";

import styles from "../styles/DropdownItem.module.css";

const DropdownItem = ({ title, isDefault }) => {
  const getContainerStyles = (isDefault) => {
    return isDefault
      ? `${styles.container} ${styles.underline}`
      : styles.container;
  };

  return (
    <div className={styles.container}>
      <div className={styles.optionwrapper}>
        <span className={styles.title}>{title}</span>
        <a className={styles.link} href="#">
          <Image
            priority
            src="/images/dropdown.svg"
            width={9}
            height={5}
            alt=""
          />
        </a>
      </div>
      {isDefault ? <div className={styles.underline}></div> : ""}
    </div>
  );
};

export default DropdownItem;
