import React, { Component } from 'react';
import TaskList from '../components/TaskList/TaskList';
import './HomeScreen.css';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    // Check if tasks are stored in localStorage
    const storedTasks = JSON.parse(localStorage.getItem('userTodoList'));

    this.state = {
      userTodoList: storedTasks || [], // If there are stored tasks, use them, otherwise use an empty array
      newTaskTitle: '',
      newTaskDescription: '',
      newSubtasks: [],
      newTaskStatus: 'ToDo',
    };
  }

  deleteTodo = (uniqueNo) => {
    const { userTodoList } = this.state;
    const filteredUsersData = userTodoList.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    this.setState({
      userTodoList: filteredUsersData,
    });
  };

  // ... Other methods remain the same
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCreateTask = () => {
    const {
      userTodoList,
      newTaskTitle,
      newTaskDescription,
      newSubtasks,
      newTaskStatus,
    } = this.state;

    // Check if the newTaskTitle is empty
    if (!newTaskTitle) {
      alert('Task title is mandatory!');
      return; // Exit the function if title is empty
    }

    const status = newTaskStatus || 'ToDo'; // Use "ToDo" if newTaskStatus is not specified

    const newTask = {
      uniqueNo: userTodoList.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      subtasks: newSubtasks.map((subtask, index) => ({
        id: index + 1,
        subtask,
      })),
      status: status,
    };

    this.setState((prevState) => ({
      userTodoList: [...prevState.userTodoList, newTask],
      newTaskTitle: '',
      newTaskDescription: '',
      newSubtasks: [],
    }));
  };
  handleAddSubtask = () => {
    const { newSubtasks } = this.state;
    this.setState({
      newSubtasks: [...newSubtasks, ''],
    });
  };

  handleSubtaskChange = (index, value) => {
    const { newSubtasks } = this.state;
    const updatedSubtasks = [...newSubtasks];
    updatedSubtasks[index] = value;
    this.setState({
      newSubtasks: updatedSubtasks,
    });
  };

  handleStatusChange = (event) => {
    this.setState({
      newTaskStatus: event.target.value,
    });
  };

  componentDidUpdate() {
    // Whenever the component updates, save the tasks to localStorage
    const { userTodoList } = this.state;
    localStorage.setItem('userTodoList', JSON.stringify(userTodoList));
  }

  render() {
    const {
      userTodoList,
      newTaskTitle,
      newTaskDescription,
      newSubtasks,
      newTaskStatus,
    } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="container tasksContainer col-6 pt-4 pb-3">
            <div className="todo-count d-flex flex-row justify-content-start align-items-center">
              <div className="dot"></div>
              <div className="todo-heading">
                <h1 className="todo-heading">TODO ({userTodoList.length})</h1>
              </div>
            </div>
            <ul className="todosContainer">
              {userTodoList.map((each) => (
                <TaskList
                  todoDetails={each}
                  key={each.uniqueNo}
                  deleteTodo={this.deleteTodo}
                  subtasks={each.subtasks}
                  status={each.status}
                />
              ))}
            </ul>
          </div>
          <div className="container addNewTaskContainer col-6 pt-4 pb-3">
            <h1 className="taskTittleHeading">Add New Task</h1>

            <div className="taskTitle mb-5">
              <h1 className="addTaskHeading">Title</h1>
              <input
                className="takeTask"
                type="text"
                name="newTaskTitle"
                value={newTaskTitle}
                onChange={this.handleInputChange}
                placeholder="e.g Take coffee break"
              />
            </div>

            <div className="taskDesc mb-5">
              <h1 className="addTaskHeading">Description</h1>
              <textarea
                className="takeTask takeDesc"
                rows={4}
                name="newTaskDescription"
                value={newTaskDescription}
                onChange={this.handleInputChange}
                placeholder="e.g Take coffee break for 15 min and feel free and then go for work again!"
              />
            </div>

            <div className="takeSubtask mb-5">
              <h1 className="addTaskHeading">Subtasks</h1>
              {newSubtasks.map((subtask, index) => (
                <div className="subtaskinputContainer mb-3" key={index}>
                  <input
                    className="takeTask subtaskinput"
                    type="text"
                    value={subtask}
                    onChange={(e) =>
                      this.handleSubtaskChange(index, e.target.value)
                    }
                    placeholder="e.g Take coffee break"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </div>
              ))}

              <button
                className="button white"
                type="button"
                onClick={this.handleAddSubtask}
              >
                + Add New Subtask
              </button>
            </div>

            <div className="takeStatus mb-5">
              <h1 className="addTaskHeading">Status</h1>
              <div className="btn-group mb-3">
                <select
                  value={newTaskStatus}
                  onChange={this.handleStatusChange}
                  className="form-select"
                >
                  <option value="ToDo">ToDo</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <button
                className="button blue"
                type="button"
                onClick={this.handleCreateTask}
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
