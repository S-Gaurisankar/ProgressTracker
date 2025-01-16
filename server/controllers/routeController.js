const express = require("express");
const router = express.Router();
const app = express();

const getAllTasks = require('../routes/getAllTasks');
const getTask = require('../routes/getTask');
const addTask = require('../routes/addTask');
const updateTaskByJiraTicket = require('../routes/updateTask');
const queryTask = require('../routes/queryTask');
const log = require('../routes/logs');
const deleteTaskByJiraTicket = require('../routes/deleteTask');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/', getAllTasks);   //Gets all tasks
router.get("/query",queryTask); //Get a task with any params (jira_ticket, status, department, etc.)
router.get("/:id", getTask);  //Get a task by id (MongoDB ID)

router.get("/logs", log);
router.post("/post", addTask);  //Add a new task

router.put("/update/:jira_ticket", updateTaskByJiraTicket);  //Edit the task by jira_ticket

router.delete("/delete/:jira_ticket", deleteTaskByJiraTicket);  //Delete a task by jira_ticket

module.exports = router;

