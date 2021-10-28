import { style } from "dom-helpers";
import React from "react";
import Image from "next/image";
import { Figure } from "@leafwell/components";

import { HIGHLIGHT_POSTS } from "../public/assets/highlight-posts";
import styles from "../styles/HighlightPosts.module.css";

const HighlightPosts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Figure
          className={styles.mainpic}
          src="https://media.gettyimages.com/photos/lifes-taught-me-a-whole-lot-about-myself-picture-id1202259529?k=20&m=1202259529&s=612x612&w=0&h=iqocRUtd8wUrxaQU4TUM_VI2HLW2-xegM34atXwRbac="
          alt=""
        />
        <h3 className={styles.title}>Politics</h3>
        <h2 className={styles.h2}>
          Cannabis: Changing Perceptions, Attitudes, & Policies
        </h2>
        <div className={styles.author}>
          <Image src="/images/author.png" alt="" width={32} height={32} />
          <div className={styles.authorinfo}>
            <p className={styles.authorname}>Dipak Hemraj</p>
            <p className={styles.authorjob}>Cannabis research expert</p>
          </div>
        </div>
      </div>

      <div className={style.others}>
        {HIGHLIGHT_POSTS.map((item, idx) => {
          return (
            <div key={idx} className={styles.otherswrapper}>
              <Figure className={styles.otherspic} src={item.imageUrl} alt="" />
              <div className={styles.descriptionwrapper}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightPosts;
