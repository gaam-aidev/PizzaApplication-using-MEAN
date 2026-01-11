const express = require('express');
const cors = require('cors');

const { pizzaRouter } = require('./routes/pizza');
const { ingredientsRouter } = require('./routes/ingredients');
const { connectDB } = require('./config/db.config');
require('dotenv').config();

const app = express();
const PORT = 3000;

connectDB(process.env.DB_URL)
.then(() => {
    console.log('Database connected successfully');
});

app.use(cors())
app.use(express.json());

app.use('/api/pizzas', pizzaRouter);
app.use('/api/ingredients', ingredientsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});