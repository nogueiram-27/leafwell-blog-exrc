import React from "react";
import Image from "next/image";
import { Button, Logo } from "@leafwell/components";
import DropdownItem from "./dropdown-item";

import { HEADER_OPTIONS } from "../public/assets/header-options";

import styles from "../styles/HeaderContainer.module.css";

const HeaderContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logowrapper}>
        {" "}
        <Logo variant="dark" width={150} />
      </div>

      <div className={styles.optionswrapper}>
        {HEADER_OPTIONS.map((item, idx) => (
          <DropdownItem
            key={idx}
            title={item.title}
            isDefault={item?.isDefault}
          />
        ))}
      </div>
      <a href="#">
        <Image
          priority
          src="/images/search.svg"
          width={19}
          height={19}
          alt=""
        />
      </a>
      <div className={styles.signin}>
        <p>Sign in</p>
        <a href="#">
          <Image
            priority
            src="/images/arrow.svg"
            width={14}
            height={11}
            alt=""
          />
        </a>
      </div>
      <Button label="Get your card" rounded variant="gradient" />
    </div>
  );
};

export default HeaderContainer;
