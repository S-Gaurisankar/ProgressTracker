import React from "react";
import Card from "../components/card";
import styles from "../styles/taskList.module.css";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const TaskList = () => {
  
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_SERVER_URL);
        const data = await response.json();
        setTasks(data || []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /****  Delete Task  ****/
  const handleDelete = useCallback(async (jira_ticket) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/delete/${jira_ticket}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTasks(prev => prev.filter(task => task.jira_ticket !== jira_ticket));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }, []);

  /*** Loader screen ****/
  if (loading) return <div className={styles.loaderScreen}>
    Loading..
    {/* <Spinner /> */}
  </div>;

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Task List
      </h1>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.taskListContainer}>
        {
          tasks.map((task) => (
          <Card key={task._id} task={task} onDelete={handleDelete} />
        ))}
      </div>
      <Link to="/addtask" className={styles.addButtonLink}>
        <button className={styles.addButton}>+</button>
      </Link>
    </>
  );
};

export default TaskList;
