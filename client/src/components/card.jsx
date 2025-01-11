import React from "react";
import styles from "../styles/card.module.css";

const Card = ({ task }) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        {/* <p>{task.task}</p>
      <p>{task.priority}</p>
      <p>{task.type}</p>
      <p>{task.assigned_sp}</p>
      <p>{task.actual_sp}</p>
      <p>{task.expected_story_points}</p>
      <p>{task.actual_story_points}</p>
      <p>{task.progress_percentage}</p>
      <p>{task.status}</p>
      <p>{task.jira_ticket}</p>
      <p>{task.due_date}</p> */}
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
      </div>
      <div className={styles.cardButtons}>
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
