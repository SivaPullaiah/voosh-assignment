import { Component } from 'react';
import './index.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="container tasksContainer col-6 pt-4 pb-3">
            <div className="todo-count d-flex flex-row justify-content-start align-items-center">
              <div className="dot"></div>
              <div className="todo-heading">
                <h1 className="todo-heading">TODO (4)</h1>
              </div>
            </div>
            <ul className="todosContainer">
              <li className="todoItem">
                <h1 className="Itemheading">Build UI for onbording flow</h1>
                <p>0 out of 3 subtasks</p>
              </li>
              <li className="todoItem">
                <h1 className="Itemheading">Build UI for onbording flow</h1>
                <p>0 out of 3 subtasks</p>
              </li>
              <li className="todoItem">
                <h1 className="Itemheading">Build UI for onbording flow</h1>
                <p>0 out of 3 subtasks</p>
              </li>
              <li className="todoItem">
                <h1 className="Itemheading">Build UI for onbording flow</h1>
                <p>0 out of 3 subtasks</p>
              </li>
            </ul>
          </div>
          {/* add new task */}
          <div className="container addNewTaskContainer col-6 pt-4 pb-3">
            <h1 className="taskTittleHeading">Add New Task</h1>

            <div className="taskTitle mb-5">
              <h1 className="addTaskHeading">Title</h1>
              <input
                className="takeTask"
                type="text"
                placeholder="e.g Take coffee break"
              />
            </div>
            {/* desc */}
            <div className="taskDesc mb-5">
              <h1 className="addTaskHeading">Description</h1>
              <textarea
                className="takeTask takeDesc"
                rows={4}
                placeholder="e.g Take coffee break for 15 min and feel free and then go for work again!"
              />
            </div>
            {/* subtask */}
            <div className="takeSubtask mb-5">
              <h1 className="addTaskHeading">Subtasks</h1>
              <div className="subtaskinputContainer mb-3">
                <input
                  className="takeTask subtaskinput"
                  type="text"
                  placeholder="e.g Take coffee break"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <div className="subtaskinputContainer mb-3">
                <input
                  className="takeTask subtaskinput"
                  type="text"
                  placeholder="e.g Take coffee break"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <button className="button white" type="submit">
                + Add New Subtask
              </button>
            </div>
            {/* status */}
            <div className="takeStatus mb-5">
              <h1 className="addTaskHeading">Status</h1>
              <div class="btn-group mb-3">
                <button
                  type="button"
                  class="btn btn-outline-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Status of the Task
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item selected" type="button">
                    ToDo
                  </button>
                  <button class="dropdown-item" type="button">
                    Completed
                  </button>
                </div>
              </div>
              <button className="button blue" type="submit">
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
