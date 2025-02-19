const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 3000;  // Use dynamic port

require('dotenv').config();



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());  // Enable CORS

// Connect to Database
const db = require('./config/mongoose');

app.use((req, res, next) => {
    console.log(`🔥 Incoming Request: ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/', require('./routes/index'));

// Start Server
app.listen(Port, (err) => {
    if (err) {
        console.error("❌ Server failed to start:", err);
        return;
    }
    console.log(`🚀 Server is running on port ${Port}`);
});
