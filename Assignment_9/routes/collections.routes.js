const router = require("express").Router();

const {
    createBooksCollection,
    createAuthorsCollection,
    createLogsCollection,
    createBooksIndex
} = require("../controllers/collections.controller");

router.post("/books", createBooksCollection);

router.post("/authors", createAuthorsCollection);

router.post("/logs/capped", createLogsCollection);

router.post("/books/index", createBooksIndex);

module.exports = router;