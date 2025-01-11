const Task = require("../models/schemaModel");

const addTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(200).json({ message: "Task added successfully" });
    console.log("Task added successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = addTask;
