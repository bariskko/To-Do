const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

// Route to get all todos
router.get('/', getAllTodos);

// Route to create a new todo
router.post('/', createTodo);

// Route to get a todo by its ID
router.get('/:id', getTodoById);

// Route to update a todo by its ID
router.patch('/:id', updateTodo);

// Route to delete a todo by its ID
router.delete('/:id', deleteTodo);

module.exports = router;
