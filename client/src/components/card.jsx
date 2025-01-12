import React from "react";
import styles from "../styles/card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ task, onDelete = () => {} }) => {
  const navigate = useNavigate();
  const getBgColor = () => {
    switch (task.priority) {
      case "Critical":
        return "#ff03033b";
      case "High":
        return "#ffbb0063";
      case "Moderate":
        return "#ffee005b";
      case "Low":
        return "#008b515d";
      default:
        return "#fff";
    }
  };

  const getBorderColor = () => {
    switch (task.priority) {
      case "Critical":
        return "#ff0303";
      case "High":
        return "#ffbb00";
      case "Moderate":
        return "#ffee00";
      case "Low":
        return "#008b51";
      default:
        return "#fff";
    }
  };

  const handleEdit = () => {
    navigate(`/editTask`,{
      state: {
        taskData: task
      }
    });
  };


  return (
    <div
      className={styles.cardContainer}
      style={{
        backgroundColor: getBgColor(),
        border: `2px solid ${getBorderColor()}`,
      }}
    >
      <div>
        <p>Task Name: {task.task}</p>
        <p>Priority: {task.priority}</p>
        <p>Type: {task.type}</p>
        <p>Assigned SP: {task.assigned_sp}</p>
        <p>Actual SP: {task.actual_sp}</p>
        <p>Expected Story Points: {task.expected_story_points}</p>
        <p>Actual Story Points: {task.actual_story_points}</p>
        <p>Progress Percentage: {task.progress_percentage}</p>
        <p>Status: {task.status}</p>
        <p>Jira Ticket: {task.jira_ticket}</p>
        <p>Due Date: {task.due_date}</p>
        <p>department: {task.department}</p>
        <p>comment: {task.comment}</p>
      </div>
      <div className={styles.cardButtons}>
        <button
          className={styles.doneButton}
          onClick={() => onDelete?.(task.jira_ticket)}
        >
          Done
        </button>

        <button className={styles.editButton} onClick={handleEdit}>Edit</button>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(task.jira_ticket)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
