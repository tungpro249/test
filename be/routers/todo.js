const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/todo-list", todoController.list);
router.post("/add-todo", todoController.addList);
router.put("/update-todo", todoController.updateList);
router.post("/delete-todo", todoController.deleteList);
router.post("/delete-multiple-todo", todoController.deleteMultiple);
router.post("/add-by-file", upload.single("file"), todoController.addByFile);

module.exports = router;
