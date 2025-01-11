import React from "react";
import styles from "../styles/card.module.css";

const Card = ({ task }) => {
  const getBgColor = () => {
    switch(task.priority) {
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
  }

  const getBorderColor = () => {
    switch(task.priority) {
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
  }

  return (
    <div className={styles.cardContainer} style={{ backgroundColor: getBgColor(), border: `2px solid ${getBorderColor()}` }}>
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
      </div>
      <div className={styles.cardButtons}>
        <button>Done</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;

// "task": "[Design] User Interface Mockups",
// "priority": "Critical",
// "type": "Incidental",
// "assigned_sp": 5,
// "actual_sp": 3,
// "expected_story_points": 3,
// "actual_story_points": 5,
// "progress_percentage": 46,
// "status": "Pending",
// "jira_ticket": "VPD-51606",
// "due_date": "2025-05-29",

/* 
<p>Task: [Design] User Interface Mockups</p>
<p>Priority: Critical</p>
<p>Type: Incidental</p>
<p>Assigned SP: 5</p>
<p>Actual SP: 3</p>
<p>Expected Story Points: 3</p>
<p>Actual Story Points: 5</p>
<p>Progress Percentage: 46</p>
<p>Status: Pending</p>
<p>Jira Ticket: VPD-51606</p>
<p>Due Date: 2025-05-29</p> 
*/
