import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <form action="" className={styles.searchForm}>
        <span>&#128270;</span>
        <input type="text" placeholder="Task or Jira Id" />
      </form>
      <Link to="/tasklist" className={styles.taskListLink}>
        <p>TaskList</p>
      </Link>
    </div>
  );
};

export default Navbar;
