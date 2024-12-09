const todoService = require("../sevices/todoSevice");
const todoController = {
  list: async (req, res) => {
    const data = await todoService.list();
    res.json({
      success: "success",
      data: data,
    });
  },
  addList: (req, res) => {
    const data = req.body;
    const updatedData = todoService.add(data);
    res.json({
      success: "success",
      data: updatedData,
    });
  },
  updateList: (req, res) => {
    const id = req.params.id;
    const dataUpdate = req.body;
    const updatedData = todoService.update(id, dataUpdate);
    res.json({
      success: "success",
      data: updatedData,
    });
  },
  deleteList: (req, res) => {
    const id = req.params.id;
    const updatedData = todoService.delete(id);
    res.json({
      success: "success",
      data: updatedData,
    });
  },

  addByFile: (req, res) => {
    const filePath = req.file.path;
    const updatedData = todoService.addByFile(filePath);
    res.json({
      success: "success",
      data: updatedData,
    });
  },
};

module.exports = todoController;
