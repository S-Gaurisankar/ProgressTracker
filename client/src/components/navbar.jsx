import React,{ useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/query?${searchQuery}`);
    const data = await response.json();
    navigate('/searchtask', {
      state: {
        searchedData: response.ok ? data : null,
        searchQuery: searchQuery
      }
    });
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') handleSearch(e);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.taskListLink}>
          <p>Home</p>
        </Link>
        
        <Link to="/tasklist" className={styles.taskListLink}>
          <p>TaskList</p>
        </Link>
      </div>

      <form action="" className={styles.searchForm} onSubmit={handleSearch}>
        <span>&#128270;</span>
        <input type="text" placeholder="Task or Jira Id"
        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyPress}/>
      </form>
    </div>
  );
};

export default Navbar;
