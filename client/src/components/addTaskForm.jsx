import React from "react";
import styles from "../styles/addTaskForm.module.css";

const AddTaskForm = () => {
  return (
    <div className={styles.addTaskFormContainer}>
      <h1>Add a New Task</h1>
      <form action="" method="POST" className={styles.addTaskForm}>
        <div className={styles.formInput}>
          <label htmlFor="task">Enter Task</label>
          <input type="text" id="task" name="task" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="priority">Priority</label>
          <input type="text" id="priority" name="priority" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="type">What is the type of the task?</label>
          <input type="text" id="type" name="type" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="assigned_sp">Assigned Story Point</label>
          <input type="text" id="assigned_sp" name="assigned_sp" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="actual_sp">Actual Story Point</label>
          <input type="text" id="actual_sp" name="actual_sp" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="progress_percentage">Progress</label>
          <input
            type="text"
            id="progress_percentage"
            name="progress_percentage"
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="status">Status</label>
          <input type="text" id="status" name="status" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="jira_ticket">Jira Ticket</label>
          <input type="text" id="jira_ticket" name="jira_ticket" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="due_date">Due Date</label>
          <input type="text" id="due_date" name="due_date" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="comment">Comments</label>
          <input type="text" id="comment" name="comment" />
        </div>
        <button type="submit" className={styles.addTaskButton}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
