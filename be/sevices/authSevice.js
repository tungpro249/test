import userModel from "../models/userModel";

const authService = {
  login: async (username, password) => {
    const user = await userModel.findOne({
      where: { username: username },
    });
    if (!user) {
      console.log("Không tìm thấy username");
      return null;
    }

    if (user.password !== password) {
      console.log("Sai mật khẩu");
      return null;
    }

    return user;
  },
  register: async (data) => {
    const user = await userModel.findOne({
      where: { username: data.username },
    });
    if (user) return null;

    const newUser = await userModel.create(data);
    return newUser;
  },
  forgetPassword: async (data) => {
    const user = await userModel.findOne({ where: { email: data } });
    return user;
  },
};

module.exports = authService;
