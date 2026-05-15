const express = require("express");

const {
    createComments,
    updateComment,
    findOrCreateComment,
    searchComments,
    newestComments,
    commentDetails
} = require("../controllers/commentController");

const router = express.Router();

router.post("/", createComments);

router.patch("/:commentId", updateComment);

router.post("/find-or-create", findOrCreateComment);

router.get("/search", searchComments);

router.get("/newest/:postId", newestComments);

router.get("/details/:id", commentDetails);

module.exports = router;