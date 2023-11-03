import './index.css';
const TaskList = (props) => {
  const { todoDetails } = props;
  const { title } = todoDetails;

  return (
    <li className="todoItem">
      <h1 className="Itemheading">{title}</h1>
      <p>0 out of 3 subtasks</p>
    </li>
  );
};

export default TaskList;
