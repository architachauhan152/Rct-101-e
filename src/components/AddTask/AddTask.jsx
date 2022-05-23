import React from "react";
import styles from "./addTask.module.css";
import Task from "../Task/Task";
import data from "../../data/tasks.json"
const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [state,setState]=React.useState("");
  const [list, setList] = React.useState([])
  const payload = { id: 0, text: state, done: false, count: 0 };
  const handleAdd=()=>{
    
    setList([...list, payload])
  }
  console.log(list)
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        placeholder="Add task..."
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button data-cy="add-task-button" onClick={handleAdd}>
        Add
      </button>
      
      <div>
        {list.map((item) => {
          return <div>{item.text}</div>;
        })}
      </div>
      <div>
        {data.map((item) => {
          return <div>{item.text}</div>;
        })}
      </div>
    </div>
  );
};

export default AddTask;
