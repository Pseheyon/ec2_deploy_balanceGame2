const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likes");

router.post("/:gameId/:option", likeController.updateLike);

module.exports = router;
