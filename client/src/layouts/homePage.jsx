import React from "react";
import styles from "../styles/homePage.module.css";
import DisplaySection from "./displaySection";
import ChatSection from "./chatSection";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <>
      <h1 style={{ 
        textAlign: "center",
        marginBottom: "1rem",
        marginTop: "1rem"
      }}>Progress Tracker Tool</h1>
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <Navbar />
        </div>
        <div className={styles.displayContainer}>
          <DisplaySection />
          <ChatSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
