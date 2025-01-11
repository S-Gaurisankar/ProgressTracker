# TaskApp System Backend

The backend provides a RESTful API for managing tasks and includes features such as database interaction, logging, and modular route handling.

---

## **Project Features**

- **API Endpoints**:
  - Fetch all tasks
  - Fetch a single task by ID
  - Query tasks using filters
  - Add, update, and delete tasks
  - Track tasks by JIRA tickets
- **Database Integration**:
  - MongoDB with Mongoose for schema validation and interaction
- **Logging**:
  - All API activity is logged
  - Logs stored in a `logs.txt` file
- **Modular Structure**:
  - Routes, models, and controllers are separated for maintainability and scalability

---

## **Technologies Used**

### **Core Technologies**

- **Node.js**: Runtime environment
- **Express.js**: Framework for building APIs
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB

---

## **Installation and Setup**

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/): LTS version recommended
- [MongoDB](https://www.mongodb.com/): Local or cloud-based instance
- [Git](https://git-scm.com/): For version control

### **Steps**

1. Clone the repository and navigate to backend:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
   Connection string used here: mongodb+srv://gaurisankar2003:Mongo%40100@cluster0.0whco.mongodb.net/Task_App

4. Run the server:
   ```bash
   npm start
   ```

## Directory Structure
```bash
backend/
  ├── models/        # Mongoose schemas
  ├── routes/        # API routes
  ├── controllers/   # Route controllers
  ├── index.js      # Main entry point
  ├── package.json  
  └── .gitignore    
```

## API Endpoints

### Task Routes

- `GET /api/tasks` - Fetch all tasks
- `GET /api/tasks/query` - Query tasks using filters
- `GET /api/tasks/:id` - Fetch a task by MongoDB ID
- `POST /api/tasks/post` - Add a new task
- `PUT /api/tasks/update/:jira_ticket` - Update a task by JIRA ticket
- `DELETE /api/tasks/delete/:jira_ticket` - Delete a task by JIRA ticket

### Log Routes
- `GET /api/logs` - Download the API activity log file

## Task Schema

Tasks include the following fields:
- `task`: String (required)
- `priority`: String (Low/Moderate/High/Critical)
- `type`: String (Planned/Incidental/Emergency)
- `assigned_sp`: Number
- `actual_sp`: Number
- `expected_story_points`: Number
- `actual_story_points`: Number
- `progress_percentage`: Number (0-100)
- `status`: String (Completed/Under Review/Pending/Yet to be Assigned)
- `jira_ticket`: String (unique)
- `due_date`: Date
- `department`: String
- `comment`: String