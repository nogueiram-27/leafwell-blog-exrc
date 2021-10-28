import React from "react";
import { Logo } from "@leafwell/components";
import AboutUs from "./about-us";
import SocialMedia from "./social-media";
import Contacts from "./contacts";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const info = [
    "About us",
    "Contact us",
    "Careers",
    "Get involved",
    "Scholarship",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.infowrapper}>
        <div className={styles.aboutus}>
          <Logo className={styles.icon} variant="icon" width={84} />
          <AboutUs items={info} />
        </div>
        <div className={styles.social}>
          <SocialMedia />
        </div>
      </div>
      <div className={styles.contacts}>
        <Contacts />
      </div>
    </div>
  );
};

export default Footer;
