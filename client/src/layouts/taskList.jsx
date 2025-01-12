import React from "react";
import Card from "../components/card";
import styles from "../styles/taskList.module.css";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

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

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (selectedPriority === "All" || task.priority === selectedPriority) &&
      (selectedType === "All" || task.type === selectedType) &&
      (selectedDepartment === "All" || task.department === selectedDepartment)
  );

  /****  Delete Task  ****/
  const handleDelete = useCallback(async (jira_ticket) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/delete/${jira_ticket}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setTasks((prev) =>
          prev.filter((task) => task.jira_ticket !== jira_ticket)
        );
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }, []);

  /*** Loader screen ****/
  if (loading) return <div className={styles.loaderScreen}>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Task List
      </h1>
      <div className={styles.navbarContainer}>

        <div className={styles.filterContainer}>
          <div className={styles.priorityfilter}>
          <label htmlFor="priorityFilter">Priority: </label>
          <select
            id="priorityFilter"
            value={selectedPriority}
            onChange={handlePriorityChange}
          >
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
          </div>

          <div className={styles.typefilter}>
          <label htmlFor="typeFilter">Type: </label>
          <select
            id="typeFilter"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="All">All</option>
            <option value="Planned">Planned</option>
            <option value="Incidental">Incidental</option>
            <option value="Emergency">Emergency</option>
          </select>
          </div>
        </div>

        <Navbar />
      </div>

      <div className={styles.taskListContainer}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Card key={task._id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <div className={styles.noTasksMessage}>
            No tasks found matching the selected filters.
          </div>
        )}
      </div>
      <Link to="/addtask" className={styles.addButtonLink}>
        <button className={styles.addButton}>+</button>
      </Link>
    </div>
  );
};

export default TaskList;
