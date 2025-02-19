const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');


require('dotenv').config();

connectDB();

const app = express();

app.use('/api/posts',postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
