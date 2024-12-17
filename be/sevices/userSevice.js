const userModel = require("../models/userModel");

const userService = {
  getInfo: (id) => {
    const item = userModel.findByPk(id);
    return item;
  },
};

module.exports = userService;
