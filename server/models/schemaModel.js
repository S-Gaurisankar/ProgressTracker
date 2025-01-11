const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  priority: { type: String, enum: ['Low', 'Moderate', 'High', 'Critical'], required: true },
  type: { type: String, enum: ['Planned', 'Incidental', 'Emergency'], required: true },
  assigned_sp: { type: Number, required: true },
  actual_sp: { type: Number, required: true },
  expected_story_points: { type: Number, required: true },
  actual_story_points: { type: Number, required: true },
  progress_percentage: { type: Number, min: 0, max: 100, required: true },
  status: { 
    type: String, 
    enum: ['Completed', 'Under Review', 'Pending', 'Yet to be Assigned'], 
    required: true 
  },
  jira_ticket: { type: String, required: true, unique: true },
  due_date: { type: Date, required: true },
  department: { type: String, required: true },
  comment: { type: String, default: '' }
});

const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;
