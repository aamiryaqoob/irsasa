"use client";
import React from "react";
import styles from "./Services.module.css";
import dark from "./ServicesDark.module.css";
import { useSelector } from "react-redux";

const Services = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Aboutus_section}>
      <div className={theme ? dark.container : styles.container}>
      
        <div className={styles.about_company}>
          <p className={theme ? dark.p1 : styles.p1}>
            <span className={styles.span}>550+</span> Projects
          </p>
          <p className={theme ? dark.p2 : styles.p2}>
            <span className={styles.span}>201000+</span> Worked Hours
          </p>
          <p className={theme ? dark.p3 : styles.p3}>
            <span className={styles.span}>13+</span> Years in operation
          </p>
          <p className={theme ? dark.p4 : styles.p4}>
            <span className={styles.span}>27+</span> Industries surved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
