const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class authController {
  login = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(404).json({
        message: "Please provide your email",
      });
    }
    if (!password) {
      return res.status(404).json({
        message: "Please provide your password",
      });
    }
    try {
      const user = await authModel.findOne({ email }).select("+password");

      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const obj = {
            id: user.id,
            name: user.name,
            category: user.category,
            role: user.role,
          };
          const token = await jwt.sign(obj, process.env.secret, {
            expiresIn: process.env.exp_time,
          });
          return res.status(200).json({
            message: "Login Succesfully",
            token,
          });
        } else {
          return res.status(404).json({
            message: "Wrong Crediential",
          });
        }
      } else {
        return res.status(404).json({
          message: "Wrong Crediential",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  add_writer = async (req, res) => {
    const { name, email, password, category } = req.body;

    if (!name) {
      return res.status(404).json({ message: "Please Provide writer name" });
    }
    if (!email) {
      return res.status(404).json({ message: "Please Provide writer email" });
    }
    if (!password) {
      return res
        .status(404)
        .json({ message: "Please Provide writer password" });
    }
    if (!category) {
      return res
        .status(404)
        .json({ message: "Please Provide writer category" });
    }

    if (
      email &&
      !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      return res.status(404).json({ message: "Please Provide a Valid Email" });
    }
    try {
      const writer = await authModel.findOne({ email: email.trim() });
      if (writer) {
        return res.status(404).json({ message: "Writer already exist" });
      } else {
        const new_writer = await authModel.create({
          name: name.trim(),
          email: email.trim(),
          password: await bcrypt.hash(password.trim(), 9),
          category: category.trim(),
          role: "writer",
        });

        return res.status(201).json({ message: "Writer create succesfully" });
      }
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Server internal error" });
    }
  };

  get_writers = async (req, res) => {
    try {
      const writers = await authModel.find({ role: "writer" }).sort({
        createdAt: -1,
      });
      return res.status(201).json({ writers });
    } catch (error) {
      return res.status(500).json({ message: "Server internal error" });
    }
  };
}

module.exports = new authController();
