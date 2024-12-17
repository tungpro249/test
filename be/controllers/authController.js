const { message } = require("antd");
const authService = require("../sevices/authSevice");

const authController = {
  login: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const user = await authService.login(username, password);
      if (user) {
        res.json({ message: "Login successfully", data: user });
      } else {
        res.json({ message: "Login failed", user: [] });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  register: async (req, res) => {
    try {
      const data = req.body;
      const user = await authService.register(data);
      if (user) {
        res.json({ message: "User already registered", user: user });
      } else {
        res.json({ message: "User registered successfully", user: [] });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  forgetPassword: (req, res) => {
    try {
      const email = req.body.email;
      const user = authService.forgetPassword(email);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = authController;
