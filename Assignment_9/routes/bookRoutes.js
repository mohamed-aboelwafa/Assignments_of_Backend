const express=require("express");

const router=express.Router();

const {
insertBook,
insertManyBooks,
updateBook,
findBook,
findYearRange,
findGenre,
skipLimit,
yearInteger,
excludeGenres,
deleteBeforeYear,
aggregate1,
aggregate2,
aggregate3,
aggregate4

}=require("../controllers/bookController");


router.post("/",insertBook);

router.post("/batch",insertManyBooks);

router.patch("/:title",updateBook);

router.get("/title",findBook);

router.get("/year",findYearRange);

router.get("/genre",findGenre);

router.get("/skip-limit",skipLimit);

router.get("/year-integer",yearInteger);

router.get("/exclude-genres",excludeGenres);

router.delete("/before-year",deleteBeforeYear);

router.get("/aggregate1",aggregate1);

router.get("/aggregate2",aggregate2);

router.get("/aggregate3",aggregate3);

router.get("/aggregate4",aggregate4);

module.exports=router;