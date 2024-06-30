import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';
import AddTodo from './pages/AddTodo';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/todos/:id" element={<TodoDetail />} />
      <Route path="/add" element={<AddTodo />} />
    </Routes>
  </Router>
);

export default AppRoutes;
