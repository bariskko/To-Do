import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Assuming you have defined your custom styles in styles.css

const AddTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the server to create a new todo
    axios.post('http://localhost:5001/api/todos', { title, description, dueDate })
      .then(() => navigate('/')) // Navigate to the home page on success
      .catch(error => console.error(error)); // Log any errors to the console
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Add New Todo</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="button2">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
