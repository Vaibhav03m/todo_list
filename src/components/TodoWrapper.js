import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import EditTodoForm from './EditTodoForm';
import Todo from './Todo'; 


function TodoWrapper() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Add task
    const addTodo = (todo) => {
        setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}]);
    }

    // Delete task
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    // Toggle Complete
    const toggleComplete = (id) => {
        setTodos(todos.map((todo)=> todo.id === id ? { ...todo, completed:!todo.completed} : todo))
    }

    // Edit editing state of task
    const editTodo = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo)
        )
    }

    // Edit task name
    const editTask = (task, id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, task, isEditing:!todo.isEditing} : todo)
        )
    }

  return (
    <div className="TodoWrapper">
        <h1>TO-DO LIST</h1>
        <TodoForm addTodo={addTodo}/>

        {todos.map((todo)=> todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
            <Todo 
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            />
        )
    )}
    </div>
  )
}

export default TodoWrapper