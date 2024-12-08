const dataFake = require("./dataFake");

const reader = require("xlsx");

const todoController = {
  list: (req, res) => {
    res.json({
      success: "success",
      data: dataFake,
    });
  },
  addList: (req, res) => {
    const data = req.body;
    dataFake.push(data);
    res.json({
      success: "success",
      data: dataFake,
    });
  },
  updateList: (req, res) => {
    const id = req.params.id;
    const dataUpdate = req.body;
    dataFake[id] = dataUpdate;
    res.json({
      success: "success",
      data: dataFake,
    });
  },
  deleteList: (req, res) => {
    const id = req.params.id;
    dataFake.splice(id, 1);
    res.json({
      success: "success",
      data: dataFake,
    });
  },

  addByFile: (req, res) => {
    const filePath = req.file.path;
    const file = reader.readFile(filePath);
    const sheets = file.SheetNames;
    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        dataFake.push(res);
      });
    }
    res.json({
      success: "success",
      data: dataFake,
    });
  },
};

module.exports = todoController;
