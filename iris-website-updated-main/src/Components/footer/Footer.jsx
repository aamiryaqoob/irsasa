"use client";
import React from "react";
import styles from "../footer/Footer.module.css";
import dark from "./FooterDark.module.css";
import { Divider } from "antd";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <footer style={{backgroundColor:theme ? "#111314": "#fff"}}>
    <div className={theme ? dark.footer : styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLink}>
          <h3>Services</h3>
          <div>
            <p>Software Development</p>
            <p>Web Development</p>
            <p>Web Design</p>
            <p>UI/UX Development</p>
            <p>CMS Development</p>
            <p>Ecommerce Development</p>
            <p>Staff Augmentation</p>
            <p>Startup Development</p>
            <p>Internet of Things (IoT)</p>
            <p>Robotic Process Automation</p>
            <p>ML & Artificial Intelligence (AI)</p>
            <p>Mobile App Development</p>
          </div>
        </div>
        <div className={styles.footerLink}>
          <h3>Technologies</h3>
          <div>
            <p>Php</p>
            <p>Python</p>
            <p>Laravel</p>
            <p>React Js</p>
            <p>Angular Js</p>
            <p>Node Js</p>
            <p>MEAN Stack</p>
            <p>React Native</p>
            <p>WordPress</p>
            <p>Java</p>
            <p>MERN Stack</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div className={styles.footerLink}>
          <h3>Company</h3>
          <div>
            <p>Contact Us</p>
            <p>Portfolio</p>
            <p>Blog</p>
          </div>
        </div>
        <div className={styles.footerLink}>
          <h3>Contact</h3>
          <div>
            <p>
              265 Ponce De Leon Ave NE, <br />
              Suite 3217 Atlanta, <br />
              Georgia 30308, USA
            </p>
            <p>+1 678-841-8442</p>
            <p className={styles.contact_info}>info@mywebprogrammer.com8442</p>
          </div>
        </div>
      </div>
      <Divider style={{ margin: 0, border: "0.5px solid #3433339b" }} />
      <div className={styles.subfooter}>
        <p>Copy @ 2023 Iris </p>
        <p>Privacy Policy</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
