"use client";
import React from "react";
import styles from "./BlogPost.module.css";
import dark from "./BlogPostDark.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { BigPlayButton, Player } from "video-react";

const BlogHero = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={theme ? dark.media_section : styles.media_section}>
      <div className={styles.container}>
        <div className={styles.img_div}>
          <Player
            height={"20rem"}
            poster="/images/mediaimg.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            {/* <BigPlayButton position="center" /> */}
          </Player>
        </div>
      </div>
      <div className={styles.icon_div}>
        <h1>Streamline Order Fulfillment in <br />Your Warehouse</h1>
        <div className={styles.icons}>
          <span className={styles.share}>Share on</span>
          <span><img src="/images/fbicon.png" alt="" /></span>
          <span><img src="/images/instaicon.png" alt="" /></span>
          <span><img src="/images/twitericon.png" alt="" /></span>
        </div>
      </div>
      <p className={styles.iconp}>January 24, 2022 Posted by Faiqa Akmal</p>
    </section>
  );
};

export default BlogHero;
