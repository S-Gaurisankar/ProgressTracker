import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/homePage.jsx";
import AddTask from "./components/addTaskForm.jsx";
import TaskList from "./layouts/taskList.jsx";
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
          </Routes>
        </QueryProvider>
      </Router>
    </>
  );
}

export default App;
