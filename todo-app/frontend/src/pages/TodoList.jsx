import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css'; // Assuming you have defined your custom styles in styles.css

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Fetches the list of todos from the server when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5001/api/todos')
      .then(response => setTodos(response.data)) // Sets the todos state with fetched data
      .catch(error => console.error(error)); // Logs any errors to the console
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>Todo List</h1>
        <Link to="/add" className="link">Add New Todo</Link>
        <table className="todo-table"> 
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo._id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : '-'}</td>
                <td>
                  <Link to={`/todos/${todo._id}`} className="button1">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
