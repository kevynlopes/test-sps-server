const express = require("express");
const controller = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authenticate);

router.get("/", controller.list);
router.get("/:email", controller.getByEmail);
router.post("/", controller.register);
router.delete("/:email", controller.remove);
router.put("/:email", controller.update);

module.exports = router;
