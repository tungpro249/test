const reader = require("xlsx");
import todoModel from "../models/todoModel.js";

const todoService = {
  list: async (page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    const { count, rows } = await todoModel.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });

    return {
      totalItems: count,
      totalPages: Math.ceil(count / pageSize),
      currentPage: page,
      pageSize: pageSize,
      data: rows,
    };
  },

  detail: async (id) => {
    const data = await todoModel.findByPk(id);
    return data;
  },

  add: async (data) => {
    const result = await todoModel.create(data);
    return result;
  },

  update: async (id, dataUpdate) => {
    const result = await todoModel.findByPk(id);
    result.title = dataUpdate.title;
    result.description = dataUpdate.description;
    result.completed = dataUpdate.completed;
    result.save();
    return result;
  },

  delete: (id) => {
    const item = todoModel.findByPk(id);
    todoModel.destroy({ where: { id: id } });
    return item;
  },

  deleteMultiple: (ids) => {
    todoModel.destroy({ where: { id: ids } });
    return todoModel.findAll();
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
