const express = require("express");

const sequelize = require("./config/db");

const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

app.use(express.json());

// ======================================================
// Relationships
// ======================================================

User.hasMany(Post, {
    foreignKey: "userId"
});

Post.belongsTo(User, {
    foreignKey: "userId"
});

User.hasMany(Comment, {
    foreignKey: "userId"
});

Comment.belongsTo(User, {
    foreignKey: "userId"
});

Post.hasMany(Comment, {
    foreignKey: "postId"
});

Comment.belongsTo(Post, {
    foreignKey: "postId"
});

// ======================================================
// Routes
// ======================================================

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.use("/comments", commentRoutes);

// ======================================================
// Database Sync
// ======================================================

sequelize.sync({ alter: true })
.then(() => {
    console.log("Database Synced");
})
.catch((err) => {
    console.log(err);
});

// ======================================================
// Server
// ======================================================

app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});