const express = require("express");

const {
    createPost,
    deletePost,
    getPostsDetails,
    getPostsCommentCount
} = require("../controllers/postController");

const router = express.Router();

router.post("/", createPost);

router.delete("/:postId", deletePost);

router.get("/details", getPostsDetails);

router.get("/comment-count", getPostsCommentCount);

module.exports = router;