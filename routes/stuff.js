const express = require("express");
const router = express.Router();

const Thing = require("../models/Thing");
const StuffController = require("../controllers/StuffController");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.put("/:id", auth, multer, StuffController.modifyThings);
router.get("/:id", auth, StuffController.getOneThing);
router.delete("/:id", auth, StuffController.deleteThing);
router.post("/", auth, multer, StuffController.createThings);
router.get("/", auth, StuffController.getAllThings);

module.exports = router;
