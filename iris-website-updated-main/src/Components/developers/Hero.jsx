"use client";
import React from "react";
import { Button } from "antd";
import styles from "./Letstalk.module.css";
import dark from "./Letstalkdark.module.css";
import { useSelector } from "react-redux";

const HeroDev = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.first_sec}>
      <div className={theme ? dark.Letstalk : styles.Letstalk}>
        <h1>Developers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis
          quasi aspernatur accusamus, tempora ut porro asperiores temporibus ex
          recusandae voluptate pariatur, velit doloremque sit numquam.
          Voluptatum quaerat sunt sit.
        </p>
        <div className={styles.trybtn}>
          <Button className={theme ? dark.Letstalk_btn : styles.Letstalk_btn}>
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroDev;
