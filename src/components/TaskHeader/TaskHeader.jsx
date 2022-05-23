import React from "react";
import styles from "./taskHeader.module.css";
import data from '../../data/tasks.json';
const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = data.length;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <h4>
        You have <b data-cy="header-remaining-task">{unCompletedTask}</b> of{' '}
        <b data-cy="header-total-task">{totalTask}</b> tasks remaining
      </h4>
    </div>
  );
};

export default TaskHeader;
