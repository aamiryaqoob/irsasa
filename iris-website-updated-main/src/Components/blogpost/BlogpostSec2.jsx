"use client";
import React from "react";
import styles from "./BlogpostSec2.module.css";
import dark from "./BlogpostSec2Dark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const BlogpostSec2 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <p className={styles.firstp}>
        With the pandemic's persisting problems and alarming variants popping
        up, everyone's return to work looks different. Some have returned to
        their workplaces, while others have adapted to the new age of working
        from home, yet others are juggling both. As fashion lovers, we can all
        agree over the fact that it's time for a professional wardrobe refresh
        in 2022.Some people have become more than comfortable in their lounge
        sets and are now opting for comfy co-ord sets and loosely fit clothes.
        While some have welcomed back their love for dressing up with open arms.
        And if you’re anything like me, then you know dressing up in the morning
        has and will always be a hassle for us. To save time picking what to
        wear to work, I've reduced my selections to a few basic office staples
        to create a simple professional capsule wardrobe.
      </p>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.cta_left}>
          <p>
            We provide our clients with affordable, top-quality software
            development services tailored to their specific needs and
            requirements. Our expert developers have a proven track record of
            delivering high-quality, scalable, and user-friendly solutions. The
            best thing to happen to any business is working with a team that
            understands them. We know how important it is to take an overall
            collaborative approach. And that's the reason we work closely with
            our clients to ensure that we understand their unique needs and
            requirements. <br /> <br />
            We provide our clients with affordable, top-quality software
            development services tailored to their specific needs and
            requirements. Our expert developers have a proven track record of
            delivering high-quality, scalable, and user-friendly solutions. The
            best thing to happen to any business is working with a team that
            understands them. We know how important it is to take an overall
            collaborative approach. And that's the reason we work closely with
            our clients to ensure that we understand their unique needs and
            requirements.
          </p>
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
      <div className={theme ? dark.container_reverse : styles.container_reverse}>
        <div className={styles.cta_left}>
          <p>
            We provide our clients with affordable, top-quality software
            development services tailored to their specific needs and
            requirements. Our expert developers have a proven track record of
            delivering high-quality, scalable, and user-friendly solutions. The
            best thing to happen to any business is working with a team that
            understands them. We know how important it is to take an overall
            collaborative approach. And that's the reason we work closely with
            our clients to ensure that we understand their unique needs and
            requirements. <br /> <br />
            We provide our clients with affordable, top-quality software
            development services tailored to their specific needs and
            requirements. Our expert developers have a proven track record of
            delivering high-quality, scalable, and user-friendly solutions. The
            best thing to happen to any business is working with a team that
            understands them. We know how important it is to take an overall
            collaborative approach. And that's the reason we work closely with
            our clients to ensure that we understand their unique needs and
            requirements.
          </p>
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

export default BlogpostSec2;
