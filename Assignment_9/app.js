require("dotenv").config();

const express = require("express");

const { connectDB } = require("./config/db");

const booksRoutes = require("./routes/books.routes");
const collectionsRoutes = require("./routes/collections.routes");
const logsRoutes = require("./routes/logs.routes");

const app = express();

app.use(express.json());

connectDB();

app.use("/collection", collectionsRoutes);
app.use("/books", booksRoutes);
app.use("/logs", logsRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server Running");
});