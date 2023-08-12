"use client";
import BlogpostSec2 from "@/Components/blogpost/BlogpostSec2";
import BlogHero from "@/Components/blogpost/Hero";
import Blogs from "@/Components/blogs/Blogs";
import HeroBlogs from "@/Components/blogs/Hero";
import Blog from "@/Components/home/Blog";
import Contact from "@/Components/home/Contact";
import React from "react";
import { useSelector } from "react-redux";

const BlogPost = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <main
      style={{
        backgroundColor: theme ? "#111314" : "#fff",
        overflow: "hidden",
      }}
    >
      <BlogHero />
      <BlogpostSec2 />
      <Blog />
      <Contact />
    </main>
  );
};

export default BlogPost;
