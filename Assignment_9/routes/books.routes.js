const router = require("express").Router();

const controller = require("../controllers/books.controller");

router.post("/", controller.insertOneBook);

router.post("/batch", controller.insertManyBooks);

router.patch("/:title", controller.updateBook);

router.get("/title", controller.findByTitle);

router.get("/year", controller.findBetweenYears);

router.get("/genre", controller.findGenre);

router.get("/skip-limit", controller.skipLimit);

router.get("/year-integer", controller.yearInteger);

router.get("/exclude-genres", controller.excludeGenres);

router.delete("/before-year", controller.deleteBeforeYear);

router.get("/aggregate1", controller.aggregate1);

router.get("/aggregate2", controller.aggregate2);

router.get("/aggregate3", controller.aggregate3);

router.get("/aggregate4", controller.aggregate4);

module.exports = router;