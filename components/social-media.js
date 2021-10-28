import React from "react";
import Image from "next/image";
import { Heading } from "@leafwell/components";

import styles from "../styles/SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <Heading className={styles.head} level="5">
        Keep updated with our social media
      </Heading>
      <div className={styles.icons}>
        <Image
          className={styles.icon}
          src="/images/youtube-icon.svg"
          alt=""
          width={25}
          height={20}
        />
        <Image
          className={styles.icon}
          src="/images/tweeter-icon.svg"
          alt=""
          width={25}
          height={20}
        />
        <Image
          className={styles.icon}
          src="/images/instagram-icon.svg"
          alt=""
          width={25}
          height={20}
        />
        <Image
          className={styles.icon}
          src="/images/linkedin-icon.svg"
          alt=""
          width={25}
          height={20}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
