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
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.taskName}>{task.task}</h3>
          <span className={styles.jiraTicket}>{task.jira_ticket}</span>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.detailRow}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Priority:</span>
              <span className={styles.value}>{task.priority}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Type:</span>
              <span className={styles.value}>{task.type}</span>
            </div>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Assigned SP:</span>
              <span className={styles.value}>{task.assigned_sp}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Actual SP:</span>
              <span className={styles.value}>{task.actual_sp}</span>
            </div>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Expected Points:</span>
              <span className={styles.value}>{task.expected_story_points}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Actual Points:</span>
              <span className={styles.value}>{task.actual_story_points}</span>
            </div>
          </div>

          <div className={styles.progressSection}>
            <div className={styles.progressInfo}>
              <span className={styles.label}>Progress:</span>
              <span className={styles.value}>{task.progress_percentage}%</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{width: `${task.progress_percentage}%`}}
              ></div>
            </div>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Status:</span>
              <span className={styles.value}>{task.status}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Due:</span>
              <span className={styles.value}>{task.due_date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardButtons}>
        <button
          className={styles.doneButton}
          onClick={() => onDelete?.(task.jira_ticket)}
        >
          Done
        </button>
        <button className={styles.editButton} onClick={handleEdit}>
          Edit
        </button>
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
