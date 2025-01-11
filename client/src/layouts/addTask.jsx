import React from "react";
import AddTaskForm from "../components/addTaskForm";
import styles from "../styles/addTask.module.css";

const AddTask = () => {
  return (
    <div className={styles.addTaskFormContainer}>
      <AddTaskForm />
    </div>
  );
};

export default AddTask;
