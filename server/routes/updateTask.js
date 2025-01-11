const Task = require('../models/schemaModel');

const updateTaskByJiraTicket = async (req, res) => {
  try {
    const { jira_ticket } = req.params; 
    if (!jira_ticket) {
      return res.status(400).send("Jira Ticket is required");
    }
    const updatedTask = await Task.findOneAndUpdate(
      { jira_ticket }, 
      req.body,
      { new: true } 
    );

    if (!updatedTask) {
      return res.status(404).send("Task not found");
    }

    res.status(200).send(updatedTask);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateTaskByJiraTicket;
