import React from "react";
import { Link } from "@leafwell/components";

import styles from "../styles/Topic.module.css";

const Topic = ({ title, isDefault }) => {
  return (
    <div>
      {isDefault ? (
        <Link
          className={`font-heading ${styles.font}`}
          variant="underlineHighlight"
        >
          {title}
        </Link>
      ) : (
        <Link className={`${styles.color} ${styles.font}`}> {title} </Link>
      )}
    </div>
  );
};

export default Topic;
