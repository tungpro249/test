const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/todo-list", todoController.list);
router.post("/add-todo", todoController.addList);
router.put("/update-todo", todoController.updateList);
router.put("/delete-todo", todoController.deleteList);
router.post("/add-by-file", upload.single("file"), todoController.addByFile);

module.exports = router;
