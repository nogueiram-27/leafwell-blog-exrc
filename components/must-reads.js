import React from "react";
import { Figure, Heading } from "@leafwell/components";

import { MUST_READS_DATA } from "../public/assets/must-reads-data";
import styles from "../styles/MustReads.module.css";

const MustReads = () => {
  const getClass = (classname, isMain) => {
    return isMain ? (classname !== "" ? `${classname} big` : "big") : classname;
  };
  return (
    <div className={styles.container}>
      <Heading level="6">Latest News</Heading>
      <div className={styles.articleswrapper}>
        {MUST_READS_DATA.map((item, idx) => {
          if (item.isMain) {
            return (
              <div key={idx} className={`${styles.article} ${styles.big}`}>
                <Figure
                  className={`${styles.articlepic} ${styles.big}`}
                  src={item.imageUtrl}
                  alt=""
                />
                <h3 className={`${styles.area} ${styles.big}`}>{item.area}</h3>
                <h2 className={`${styles.title} ${styles.big}`}>
                  {" "}
                  {item.title}
                </h2>
                <p className={`${styles.description} ${styles.big}`}>
                  {item.description}
                </p>
              </div>
            );
          } else {
            return (
              <div key={idx} className={styles.article}>
                <Figure
                  className={styles.articlepic}
                  src={item.imageUtrl}
                  alt=""
                />
                <h3 className={styles.area}>{item.area}</h3>
                <h2 className={styles.title}> {item.title}</h2>
                <p className={styles.description}>{item.description}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MustReads;
