"use client";
import React from "react";
import styles from "./Blog.module.css";
import dark from "./BlogDark.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

const Blog = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={theme ? dark.Blog_section : styles.Blog_section}>
      <div className={theme ? dark.container : styles.container}>
        <h1 className={theme ? dark.title : styles.title}>Our Blogs</h1>
        <div className={styles.main}>
          <div className={styles.main2}>
            <p>
              We serve clients of all shapes and sizes. Read few of our Client
              Success Stories. <a href="">View All Case Studies</a>
            </p>
          </div>
          <div>
            <span className={styles.circle1}></span>
            <span className={styles.circle1}></span>
          </div>
        </div>

        <div className={styles.card_div}>
          {[1, 2, 3].map((val) => (
            <div key={val} className={theme ? dark.card3 : styles.card3}>
              <div className={styles.arrow3}>
                <Image src="/images/arrow.png" width={15} height={15} />
              </div>
              <img
                style={{
                  width: "100%",
                  height: "17rem",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
                alt=""
              />
              <div className={theme ? dark.content : styles.content}>
                <h1>7 Custom Homes</h1>
                <p>Custom Software Development for Construction Company</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
