import {
  getAllUsers,
  addUser,
  findUserById,
  updateUserById,
  deleteUserById
} from "../models/userModel.js";

// READ
export const getUsers = (req, res) => {
  const users = getAllUsers();
  res.render("users", { users });
};

// CREATE
export const createUser = (req, res) => {
  const { name } = req.body;
  if (name) addUser(name);
  res.redirect("/");
};

// UPDATE (form edit)
export const editUserForm = (req, res) => {
  const id = parseInt(req.params.id);
  const user = findUserById(id);
  res.render("edit", { user });
};

// UPDATE (proses update)
export const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  updateUserById(id, name);
  res.redirect("/");
};

// DELETE
export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  deleteUserById(id);
  res.redirect("/");
};
