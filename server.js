const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB (change the connection string accordingly)
mongoose.connect('mongodb://localhost:27017/ordering', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Define your routes and middleware here
// ...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
