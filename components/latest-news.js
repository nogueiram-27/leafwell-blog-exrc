import React from "react";
import Image from "next/image";
import { Heading } from "@leafwell/components";
import { LATEST_NEWS_DATA } from "../public/assets/latest-news-data";

import styles from "../styles/LatestNews.module.css";

const LatestNews = () => {
  return (
    <div className={styles.container}>
      <Heading level="6">Latest News</Heading>
      <div className={styles.news}>
        {LATEST_NEWS_DATA.map((item, idx) => {
          if (idx !== LATEST_NEWS_DATA.length - 1) {
            return (
              <div key={idx} className={styles.new}>
                <div>
                  <p className={styles.description}>{item.description}</p>
                  <div className={styles.readmore}>
                    <p className={styles.date}>{item.date}</p>
                    <Image
                      src="/images/arrow.svg"
                      alt=""
                      width={18}
                      height={9}
                    />
                  </div>
                </div>
                <hr className={styles.vertical}></hr>
              </div>
            );
          } else {
            return (
              <div key={idx} className={styles.new}>
                <div>
                  <p className={styles.description}>{item.description}</p>
                  <div className={styles.readmore}>
                    <p className={styles.date}>{item.date}</p>
                    <Image
                      src="/images/arrow.svg"
                      alt=""
                      width={18}
                      height={9}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default LatestNews;
