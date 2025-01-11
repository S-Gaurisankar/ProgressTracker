const Task = require('../models/schemaModel');

const deleteTaskByJiraTicket = async (req, res) => {
  try {
    const { jira_ticket } = req.params; // Extracting jira_ticket from route parameters
    console.log(jira_ticket);
    const deletedTask = await Task.findOneAndDelete({ jira_ticket });

    if (!deletedTask) {
      return res.status(404).send(`Task with ${jira_ticket} not found`);
    }

    res.status(200).send(`Task with JIRA ticket "${jira_ticket}" has been deleted.`);
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteTaskByJiraTicket;
