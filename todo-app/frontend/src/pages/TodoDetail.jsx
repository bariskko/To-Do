import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css'; // Assuming you have defined your custom styles in styles.css

const TodoDetail = () => {
  const { id } = useParams(); // Extracts the todo ID from the URL parameter
  const navigate = useNavigate(); // Provides navigation functionality
  const [todo, setTodo] = useState(null); // State to hold the todo object

  // Fetches the todo details from the server when the component mounts or when the ID changes
  useEffect(() => {
    axios.get(`http://localhost:5001/api/todos/${id}`)
      .then(response => setTodo(response.data)) // Sets the todo state with retrieved data
      .catch(error => console.error(error)); // Logs any errors to the console
  }, [id]); // Dependency array ensures useEffect runs when 'id' changes

  // Deletes the todo item
  const deleteTodo = () => {
    axios.delete(`http://localhost:5001/api/todos/${id}`)
      .then(() => navigate('/')) // Navigates to the home page after deletion
      .catch(error => console.error(error)); // Logs any errors to the console
  };

  // Toggles the completion status of the todo item
  const markCompleted = () => {
    const updatedTodo = { ...todo, completed: !todo.completed }; // Creates updated todo object
    axios.patch(`http://localhost:5001/api/todos/${id}`, updatedTodo)
      .then(response => setTodo(response.data)) // Updates the todo state with the server response
      .catch(error => console.error(error)); // Logs any errors to the console
  };

  // Renders a loading message while waiting for todo data to load
  if (!todo) return <div className="container"><div className="content">Loading...</div></div>;

  // Renders the todo details once data is loaded
  return (
    <div className="container">
      <div className="content">
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <p>Due Date: {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : '-'}</p>
        <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
        <div className="button-group">
          <button className="button delete-button" onClick={deleteTodo}>Delete</button>
          <button className="button complete-button" onClick={markCompleted}>
            {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
