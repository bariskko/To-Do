const mongoose = require('mongoose');

// Define a new Mongoose schema for the Todo model
const TodoSchema = new mongoose.Schema({
  // Title of the todo, required field
  title: {
    type: String,
    required: true
  },
  // Description of the todo, optional field
  description: {
    type: String
  },
  // Due date of the todo, optional field of type Date
  dueDate: {
    type: Date
  },
  // Completion status of the todo, defaults to false if not specified
  completed: {
    type: Boolean,
    default: false
  }
}, { 
  // Enable timestamps for createdAt and updatedAt fields
  timestamps: true 
});

// Create a Todo model based on the TodoSchema, named 'Todo'
module.exports = mongoose.model('Todo', TodoSchema);
