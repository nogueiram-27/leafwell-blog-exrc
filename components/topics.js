import React from "react";
import { Heading } from "@leafwell/components";
import Topic from "./topic";

import { TOPICS_OPTIONS } from "../public/assets/topics-options";
import styles from "../styles/Topics.module.css";

const Topics = () => {
  return (
    <div className={styles.container}>
      <Heading level="6">Topics</Heading>
      <div className={styles.topicswrapper}>
        {TOPICS_OPTIONS.map((item, idx) => (
          <Topic key={idx} title={item.title} isDefault={item.isDefault} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
