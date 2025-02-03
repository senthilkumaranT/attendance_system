const express = require('express');
const connectDB = require('./db');
const loginRoutes = require('./backend/login/login');
const signupRoutes = require('./backend/signup/signup');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 