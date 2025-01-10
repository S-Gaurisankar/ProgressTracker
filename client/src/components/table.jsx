import React from 'react'
import styles from '../styles/table.module.css'
const TaskTable = ({data}) => {
    console.log(data);
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Type</th>
            <th>Assigned SP</th>
            <th>Actual SP</th>
            <th>Status</th>
            <th>Jira Ticket</th>
            <th>Due Date</th>
          </tr>cd 
        </thead>
        <tbody>
            {data.map((item) => (
                <tr>
                    <td>{item.department}</td>
                    <td>{item.task}</td>
                    <td>{item.priority}</td>
                    <td>{item.type}</td>
                    <td>{item.assigned_sp}</td>
                    <td>{item.actual_sp}</td>
                    <td>{item.status}</td>
                    <td>{item.jira_ticket}</td>
                    <td>{item.due_date}</td>
                    <td>{item.comment}</td>
                </tr>
            ))}
        </tbody>
      </table>

    </div>
  )
}
export default TaskTable
