import express from "express";
import {
  getUsers,
  createUser,
  createUserForm,
  editUserForm,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

import { checkWords } from "../controllers/wordController.js";

const router = express.Router();

// Read (list users)
router.get("/", getUsers);

// Create (form tambah user)
router.get("/users/create", createUserForm);
router.post("/users", createUser);

// Update (form edit)
router.get("/users/edit/:id", editUserForm);
router.post("/users/edit/:id", updateUser);

// Delete
router.post("/users/delete/:id", deleteUser);

// Check Words
router.get("/check-words", (req, res) => {
  res.render("checkWordsForm", { input1: "", input2: "", type: "" });
});

router.post("/check-words", checkWords);

export default router;
