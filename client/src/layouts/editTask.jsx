import React from 'react'
import TaskForm from '../components/TaskForm'
import { useLocation } from 'react-router-dom';

const EditTask = () => {
  const location = useLocation();
  const taskData = location.state.taskData;
  return (
    <div>
      <TaskForm isEditMode={true} data={taskData} />
    </div>
  )
}

export default EditTask
