import React, { useState, useCallback } from "react";
import styles from "../styles/addTaskForm.module.css";
import { useNavigate } from "react-router-dom";

const AddTaskForm = () => {
  const navigate = useNavigate();

  const [taskname, setTaskname] = useState("");
  const [priority, setPriority] = useState("");
  const [type, setType] = useState("");
  const [assigned_sp, setAssigned_sp] = useState("");
  const [actual_sp, setActual_sp] = useState("");
  const [expected_story_point, setExpected_story_point] = useState("");
  const [actual_story_point, setActual_story_point] = useState("");
  const [progress_percentage, setProgress_percentage] = useState("");
  const [status, setStatus] = useState("");
  const [jira_ticket, setJira_ticket] = useState("");
  const [due_date, setDue_date] = useState("");
  const [department, setDepartment] = useState("");
  const [comment, setComment] = useState("");

  const createAddTask = async (task) => {
    console.log(task);
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: task,
      });
      if(response.ok) {
        console.log("Task added successfully");
        navigate('/tasklist');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleAddTask = (e) => {
    console.log("tskname:", taskname);
    console.log("priority:", priority);
    console.log("type:", type);
    console.log("assigned_sp:", assigned_sp);
    console.log("actual_sp:", actual_sp);
    console.log("expected_story_point:", expected_story_point);
    console.log("actual_story_point:", actual_story_point);
    console.log("progress_percentage:", progress_percentage);
    console.log("status:", status);
    console.log("jira_ticket:", jira_ticket);
    console.log("due_date:", due_date);
    console.log("department:", department);
    console.log("comment:", comment);
    e.preventDefault();
    const newTask = {
      task: taskname,
      priority: priority,
      type: type,
      assigned_sp: assigned_sp,
      actual_sp: actual_sp,
      expected_story_point: expected_story_point,
      actual_story_point: actual_story_point,
      progress_percentage: progress_percentage,
      status: status,
      jira_ticket: jira_ticket,
      due_date: due_date,
      department: department,
      comment: comment,
    }
    console.log(newTask);

    setTaskname("");
    setPriority("");
    setType("");
    setAssigned_sp("");
    setActual_sp("");
    setExpected_story_point("");
    setActual_story_point("");
    setProgress_percentage("");
    setStatus("");
    setJira_ticket("");
    setDue_date("");
    setDepartment("");
    setComment("");
    
    createAddTask(newTask);

  };

  return (
    <div className={styles.addTaskFormContainer}>
      <h1>Add a New Task</h1>
      <form action="" method="POST" className={styles.addTaskForm} onSubmit={handleAddTask}>
        <div className={styles.formInput}>
          <label htmlFor="task">Enter Task</label>
          <input
            type="text"
            id="task"
            name="task"
            value={taskname}
            onChange={(e) => setTaskname(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="priority">Priority</label>
          <input
            type="text"
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="type">What is the type of the task?</label>
          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="assigned_sp">Assigned SP</label>
          <input
            type="text"
            id="assigned_sp"
            name="assigned_sp"
            value={assigned_sp}
            onChange={(e) => setAssigned_sp(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="actual_sp">Actual SP</label>
          <input
            type="text"
            id="actual_sp"
            name="actual_sp"
            value={actual_sp}
            onChange={(e) => setActual_sp(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="expected_story_point">Expected Story Point</label>
          <input
            type="text"
            id="expected_story_point"
            name="expected_story_point"
            value={expected_story_point}
            onChange={(e) => setExpected_story_point(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="actual_story_point">Actual Story Point</label>
          <input
            type="text"
            id="actual_story_point"
            name="actual_story_point"
            value={actual_story_point}
            onChange={(e) => setActual_story_point(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="progress_percentage">Progress</label>
          <input
            type="text"
            id="progress_percentage"
            name="progress_percentage"
            value={progress_percentage}
            onChange={(e) => setProgress_percentage(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="jira_ticket">Jira Ticket</label>
          <input
            type="text"
            id="jira_ticket"
            name="jira_ticket"
            value={jira_ticket}
            onChange={(e) => setJira_ticket(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="due_date">Due Date</label>
          <input
            type="text"
            id="due_date"
            name="due_date"
            value={due_date}
            onChange={(e) => setDue_date(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="comment">Comments</label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={styles.addTaskButton}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
