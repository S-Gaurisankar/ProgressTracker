import React from "react";
import Card from "../components/card";
import styles from "../styles/taskList.module.css";

const TaskList = () => {
  return (
    <>
      <h1 style={{ 
        textAlign: "center",
        marginTop: "1rem" }}>
          Task List
      </h1>
      <div className={styles.taskListContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className={styles.addButton}>+</button>
    </>
  );
};

export default TaskList;
