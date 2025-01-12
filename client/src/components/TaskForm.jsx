import React, { useState } from "react";
import styles from "../styles/TaskForm.module.css";
import { useNavigate } from "react-router-dom";

const AddTaskForm = ({ isEditMode = false, data = null }) => {
  const navigate = useNavigate();

  const [taskname, setTaskname] = useState(data?.task || "");
  const [priority, setPriority] = useState(data?.priority || "");
  const [type, setType] = useState(data?.type || "");
  const [assigned_sp, setAssigned_sp] = useState(data?.assigned_sp || "");
  const [actual_sp, setActual_sp] = useState(data?.actual_sp || "");
  const [expected_story_point, setExpected_story_point] = useState(data?.expected_story_points || "");
  const [actual_story_point, setActual_story_point] = useState(data?.actual_story_points || "");
  const [progress_percentage, setProgress_percentage] = useState(data?.progress_percentage || "");
  const [status, setStatus] = useState(data?.status || "");
  const [jira_ticket, setJira_ticket] = useState(data?.jira_ticket || "");
  const [due_date, setDue_date] = useState(data?.due_date || "");
  const [department, setDepartment] = useState(data?.department || "");
  const [comment, setComment] = useState(data?.comment || "");

  const handleSubmission = async (e) => {
    e.preventDefault();

    // create a new task object
    const newTask = {};
    if (taskname) newTask.task = taskname;
    if (priority) newTask.priority = priority;
    if (type) newTask.type = type;
    if (assigned_sp) newTask.assigned_sp = assigned_sp;
    if (actual_sp) newTask.actual_sp = actual_sp;
    if (expected_story_point)
      newTask.expected_story_points = expected_story_point;
    if (actual_story_point) newTask.actual_story_points = actual_story_point;
    if (progress_percentage) newTask.progress_percentage = progress_percentage;
    if (status) newTask.status = status;
    if (jira_ticket) newTask.jira_ticket = jira_ticket;
    if (due_date) newTask.due_date = due_date;
    if (department) newTask.department = department;
    if (comment) newTask.comment = comment;
    console.log(newTask);

    try {
      if (!isEditMode) {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
          }
        );
        if (response.ok) {
          console.log("Task added successfully");
        } else {
          console.error("Failed to add task");
        }
      } else {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/update/${jira_ticket}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
          }
        );
        if (response.ok) {
          console.log("Task edited successfully");
        } else {
          console.error("Failed to add task");
        }
      }
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
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
      navigate("/tasklist");
      navigate("/tasklist");
    }
  };

  return (
    <div className={styles.addTaskFormContainer}>
      <h1>{isEditMode ? "Edit Task" : "Add a New Task"}</h1>
      <form
        action=""
        method="POST"
        className={styles.addTaskForm}
        onSubmit={handleSubmission}
      >
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

        {!isEditMode && (
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
        )}

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
        <button type="submit" className={styles.addTaskButton}>
          {isEditMode ? "Save Changes" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
