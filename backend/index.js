import express from "express";
import dotenv from "dotenv";
import colors from 'colors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
