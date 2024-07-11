import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Todo({task, deleteTodo, editTodo, toggleComplete}) {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}</p>
      <div>
      {!task.completed && <FontAwesomeIcon className="checkbox-icon" icon={faCircleCheck} onClick={()=> toggleComplete(task.id)}/>}
      {task.completed && <FontAwesomeIcon className="checkbox-icon" icon={faCircleXmark} onClick={()=> toggleComplete(task.id)}/>}
      <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=> editTodo(task.id)}/>
      <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo