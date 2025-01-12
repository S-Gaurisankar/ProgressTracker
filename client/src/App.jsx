import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/homePage.jsx";
import AddTask from "./layouts/addTask.jsx";
import TaskList from "./layouts/taskList.jsx";
import SearchResult from "./layouts/searchResult.jsx";
import EditTask from "./layouts/editTask.jsx";
import { QueryProvider } from "./context/QueryContext.jsx";

function App() {
  return (
    <>
      <Router>
        <QueryProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasklist" element={<TaskList />} />
            <Route path="/addtask" element={<AddTask />} />
            <Route path="/searchtask" element={<SearchResult />} />
            <Route path="/editTask" element={<EditTask />} />
          </Routes>
        </QueryProvider>
      </Router>
    </>
  );
}

export default App;
