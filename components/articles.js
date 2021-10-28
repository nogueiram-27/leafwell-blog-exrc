import React from "react";
import Image from "next/image";
import { Figure, Heading } from "@leafwell/components";

import { ARTICLES_DATA } from "../public/assets/articles-data";

import styles from "../styles/Articles.module.css";

const Articles = () => {
  return (
    <div className={styles.container}>
      <Heading level="6">Articles</Heading>
      <div className={styles.articlesWrapper}>
        {ARTICLES_DATA.map((item, idx) => {
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
        })}
        <div className={styles.readmore}>
          <p className={styles.paragrah}>See more posts</p>
          <Image src="/images/arrow.svg" alt="" width={18} height={9} />
        </div>
      </div>
    </div>
  );
};

export default Articles;
