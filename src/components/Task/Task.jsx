import React ,{useState}from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
const Task = ({ setList }) => {
  const [query, setQuery] = useState('');
  const [task, setTask] = useState([]);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{task}</div>
      {/* Counter here */}

      <Counter />
      <button data-cy="task-remove-button">Delete</button>
    </li>
  );
};

export default Task;
