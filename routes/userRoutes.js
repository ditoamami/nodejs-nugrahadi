import express from "express";
import {
  getUsers,
  createUser,
  editUserForm,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// Read (list users)
router.get("/", getUsers);

// Create (tambah user baru)
router.post("/users", createUser);

// Update (form edit)
router.get("/users/edit/:id", editUserForm);
router.post("/users/edit/:id", updateUser);

// Delete
router.post("/users/delete/:id", deleteUser);

export default router;
