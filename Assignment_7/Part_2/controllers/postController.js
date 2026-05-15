const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const { Sequelize } = require("sequelize");

// ======================================================
// Create Post
// ======================================================

const createPost = async (req, res) => {

    try {

        const {
            title,
            content,
            userId
        } = req.body;

        const post = new Post({
            title,
            content,
            userId
        });

        await post.save();

        res.json({
            message: "Post created successfully",
            post
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Delete Post
// ======================================================

const deletePost = async (req, res) => {

    try {

        const postId = req.params.postId;
        const { userId } = req.body;

        const post = await Post.findByPk(postId);

        if (!post) {
            return res.json({
                message: "Post not found"
            });
        }

        if (post.userId != userId) {
            return res.json({
                message: "Only owner can delete this post"
            });
        }

        await post.destroy();

        res.json({
            message: "Post deleted successfully"
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Post Details
// ======================================================

const getPostDetails = async (req, res) => {

};