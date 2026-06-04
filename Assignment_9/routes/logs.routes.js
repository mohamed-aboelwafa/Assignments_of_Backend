const router = require("express").Router();

const { insertLog } = require("../controllers/logs.controller");

router.post("/", insertLog);

module.exports = router;