const { Op } = require("sequelize");

const Comment = require("../models/Comment");
const User = require("../models/User");
const Post = require("../models/Post");

// ======================================================
// Bulk Create Comments
// ======================================================

const createComments = async (req, res) => {

    try {

        const comments = req.body;

        await Comment.bulkCreate(comments);

        res.json({
            message: "Comments Added Successfully"
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Update Comment
// ======================================================

const updateComment = async (req, res) => {

    try {

        const commentId = req.params.commentId;

        const {
            userId,
            content
        } = req.body;

        const comment = await Comment.findByPk(commentId);

        if (!comment) {

            return res.json({
                message: "Comment not found"
            });

        }

        if (comment.userId != userId) {

            return res.json({
                message: "Only owner can update comment"
            });

        }

        comment.content = content;

        await comment.save();

        res.json({
            message: "Comment Updated Successfully"
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Find Or Create Comment
// ======================================================

const findOrCreateComment = async (req, res) => {

    try {

        const {
            content,
            postId,
            userId
        } = req.body;

        const [comment, created] = await Comment.findOrCreate({

            where: {
                content,
                postId,
                userId
            },

            defaults: {
                content,
                postId,
                userId
            }

        });

        res.json({
            comment,
            created
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Search Comments
// ======================================================

const searchComments = async (req, res) => {

    try {

        const { word } = req.query;

        const comments = await Comment.findAndCountAll({

            where: {

                content: {

                    [Op.like]: `%${word}%`

                }

            }

        });

        res.json(comments);

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Newest Comments
// ======================================================

const newestComments = async (req, res) => {

    try {

        const postId = req.params.postId;

        const comments = await Comment.findAll({

            where: { postId },

            order: [["createdAt", "DESC"]],

            limit: 3

        });

        res.json(comments);

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Comment Details
// ======================================================

const commentDetails = async (req, res) => {

    try {

        const id = req.params.id;

        const comment = await Comment.findByPk(id, {

            include: [

                {
                    model: User
                },

                {
                    model: Post
                }

            ]

        });

        res.json(comment);

    } catch (err) {

        res.json(err);

    }

};

module.exports = {
    createComments,
    updateComment,
    findOrCreateComment,
    searchComments,
    newestComments,
    commentDetails
};