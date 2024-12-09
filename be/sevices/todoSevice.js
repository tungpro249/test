const dataFake = require("../controllers/dataFake");
const reader = require("xlsx");
import todoModel from "../models/todoModel.js";

const todoService = {

  list: async() => {
    const data = await todoModel.findAll();
    return data;
  },

  detail: async(id) => {
    const data = await todoModel.findByPk(id);
    return data;
  },

  add: async (data) => {
    return await todoModel.create(data);
  },

  update: async (id, dataUpdate) => {
    const todoModel = await todoModel.findByPk(id);
    todoModel.title = dataUpdate.title;
    todoModel.description = dataUpdate.description;
    todoModel.completed = dataUpdate.completed;
    todoModel.save();
    return todoModel;
  },

  delete: (id) => {
    const item = todoModel.findByPk(id);
    todoModel.destroy({ where: { id: id } });
    return item;
  },

  addByFile: (filePath) => {
    const file = reader.readFile(filePath);
    const sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((item) => {
        todoModel.create(item);
      });
    }

    return todoModel.findAll();
  },
};

module.exports = todoService;
