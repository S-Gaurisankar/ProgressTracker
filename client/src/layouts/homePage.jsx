import React from "react";
import styles from "../styles/homePage.module.css";
import DisplaySection from "./displaySection";
import ChatSection from "./chatSection";
import { QueryProvider } from "../context/QueryContext";

const HomePage = () => {
  return (
    <QueryProvider>
      <h1 style={{ 
        textAlign: "center",
        marginBottom: "1rem"
      }}>Progress Tracker Tool</h1>
      <div className={styles.container}>
        <DisplaySection />
        <ChatSection />
      </div>
    </QueryProvider>
  );
};

export default HomePage;
