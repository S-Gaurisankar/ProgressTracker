const Task = require("../models/schemaModel");

const queryTask = async (request, response) => {

  const userQuery = request.query ;
  console.log("Received Query:", userQuery);

  const numericFields = [
    "assigned_sp",
    "actual_sp",
    "expected_story_points",
    "actual_story_points",
    "progress_percentage",
  ];

  numericFields.forEach((field) => {
    if (userQuery[field]) {
      userQuery[field] = Number(userQuery[field]);
    }
  });

  if (userQuery.due_date) {
    userQuery.due_date = new Date(userQuery.due_date);
  }

  try {
    console.log("Querying Database with:", userQuery);
    const searchedTasks = await Task.find(userQuery);

    if (!searchedTasks || searchedTasks.length === 0) {
      console.log("No tasks found for query:", userQuery);
      return response.status(404).json({ message: "No tasks found" });
    }

    console.log("Tasks found!");
    response.status(200).json(searchedTasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    response.status(500).json({ message: error.message });
  }
};

module.exports = queryTask;
