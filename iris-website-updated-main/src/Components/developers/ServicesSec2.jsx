"use client";
import React from "react";
import styles from "./ServicesSec2.module.css";
import dark from "./ServicesSec2Dark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const ServicesSec2 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.cta_left}>
          <h1>Top quality custom software development at an afforable price</h1>
          <p>
            We provide our clients with affordable, top-quality software
            development services tailored to their specific needs and
            requirements. Our expert developers have a proven track record of
            delivering high-quality, scalable, and user-friendly solutions. The
            best thing to happen to any business is working with a team that
            understands them. We know how important it is to take an overall
            collaborative approach. And that&apos;s the reason we work closely with
            our clients to ensure that we understand their unique needs and
            requirements.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Request An Consultation</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/cta.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSec2;
