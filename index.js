import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";

import userRoute from "./routes/user.js";
import errorHandler, { notfound } from "./middlewares/errorHandler.js";
import { connectDB } from "./config/db.js";
connectDB();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/api/users', userRoute);
app.use(notfound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});