const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // CORS izinleri için
app.use(bodyParser.json()); // JSON body parser
app.use(morgan('tiny')); // HTTP request logger

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true, // useNewUrlParser it is now giving unnecessary warnings
  useUnifiedTopology: true // useUnifiedTopology it is now giving unnecessary warnings
})
  .then(() => console.log('MongoDB connection is successful'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

// Sunucuyu dinleme
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server ${PORT} it works on the port`);
});
