const Task = require('../models/schemaModel');

const getTask =  async (request, response) => {
    try {
      const { id } = request.params;
      const searchedTask = await Task.findById(id)
      
      if (!searchedTask) {
        return response.status(404).json({ message: "Task not found" });
      }
      console.log("Fetched Task");
  
      response.status(200).json(searchedTask);
    } catch (error) {
      console.error("Error getting task:", error);
      response.status(500).json({ message: error.message });
    }
  };

module.exports = getTask;