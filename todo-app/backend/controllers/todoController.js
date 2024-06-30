const Todo = require('../models/Todo');

// Controller function to get all todos
const getAllTodos = async (req, res) => {
  try {
    // Fetch all todos from the database
    const todos = await Todo.find();
    // Respond with a 200 status and the array of todos as JSON
    res.status(200).json(todos);
  } catch (err) {
    // Handle any errors and respond with a 500 status along with the error message
    res.status(500).json({ error: err.message });
  }
};

// Controller function to create a new todo
const createTodo = async (req, res) => {
  const { title, description, dueDate } = req.body;
  // Create a new Todo object using data from the request body
  const newTodo = new Todo({
    title,
    description,
    dueDate
  });

  try {
    // Save the new todo to the database
    const savedTodo = await newTodo.save();
    // Respond with a 201 status and the saved todo as JSON
    res.status(201).json(savedTodo);
  } catch (err) {
    // Handle validation errors or other issues and respond with a 400 status
    res.status(400).json({ error: err.message });
  }
};

// Controller function to get a todo by its ID
const getTodoById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find a todo by its ID in the database
    const todo = await Todo.findById(id);
    // If todo is not found, respond with a 404 status and a message
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    // Respond with a 200 status and the found todo as JSON
    res.status(200).json(todo);
  } catch (err) {
    // Handle errors and respond with a 400 status along with the error message
    res.status(400).json({ error: err.message });
  }
};

// Controller function to update a todo by its ID
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, completed } = req.body;

  try {
    // Find and update a todo by its ID in the database, returning the updated document
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description, dueDate, completed }, { new: true });
    // If todo is not found, respond with a 404 status and a message
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    // Respond with a 200 status and the updated todo as JSON
    res.status(200).json(updatedTodo);
  } catch (err) {
    // Handle errors and respond with a 400 status along with the error message
    res.status(400).json({ error: err.message });
  }
};

// Controller function to delete a todo by its ID
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete a todo by its ID in the database
    const deletedTodo = await Todo.findByIdAndDelete(id);
    // If todo is not found, respond with a 404 status and a message
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    // Respond with a 200 status and a success message
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    // Handle any errors and respond with a 500 status along with the error message
    res.status(500).json({ error: err.message });
  }
};

// Export all controller functions to be used in routes or other parts of the application
module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo
};
