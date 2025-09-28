import {
  getAllUsers,
  addUser,
  findUserById,
  updateUserById,
  deleteUserById
} from "../models/userModel.js";


// Perhitungan BMI (rumus berat/ (tinggi/100)**2)
function calculateBMI(weight, height) {
  return weight / ((height / 100) ** 2);
}

// Penentuan Kategori BMI berdasarkan hasil perhitungan
function bmiCategory(bmi) {
  if (bmi < 18.5) return "Kurus";
  else if (bmi < 23) return "Normal";
  else if (bmi < 25) return "Overweight (risiko)";
  else return "Obesitas";
}

// Perhitungan BMR
function calculateBMR(gender, weight, height, age) {
  if (gender === "male") {
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    return (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
}

// Perhitungan TDEE
function calculateTDEE(bmr, activity) {
  let factor;
  if (activity === "sedentary") factor = 1.2;
  else if (activity === "light") factor = 1.375;
  else if (activity === "moderate") factor = 1.55;
  else if (activity === "active") factor = 1.725;
  else factor = 1.9;
  return bmr * factor;
}

// Form Create
export const createUserForm = (req, res) => {
  res.render("users/create");
};

// Read
export const getUsers = (req, res) => {
  const users = getAllUsers();
  res.render("users", { users });
};

// Proses Create
export const createUser = (req, res) => {
  const { name, age, gender, height, weight, activity } = req.body;
  
  // Hitung semua nilai
  const bmi = calculateBMI(weight, height);
  const bmiCat = bmiCategory(bmi);
  const bmr = calculateBMR(gender, weight, height, age);
  const tdee = calculateTDEE(bmr, activity);

  // Simpan data user + hasil perhitungan
  if (name) {
    addUser(name, age, gender, height, weight, activity, bmi, bmiCat, bmr, tdee);
  }
  res.redirect("/");
};

// Form Edit
export const editUserForm = (req, res) => {
  const id = parseInt(req.params.id);
  const user = findUserById(id);
  
  if (!user) {
    return res.status(404).send("User tidak ditemukan");
  }
  
  res.render("edit", { user });
};

// Proses Update
export const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, gender, height, weight, activity } = req.body;

  // Hitung semua nilai
  const bmi = calculateBMI(weight, height);
  const bmiCat = bmiCategory(bmi);
  const bmr = calculateBMR(gender, weight, height, age);
  const tdee = calculateTDEE(bmr, activity);

  updateUserById(id, name, age, gender, height, weight, activity, bmi, bmiCat, bmr, tdee);
  res.redirect("/");
};

// Hapus
export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  deleteUserById(id);
  res.redirect("/");
};

// Detail User
export const detailUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = findUserById(id);

  if (!user) {
    return res.status(404).send("User tidak ditemukan");
  }

  res.render("users/detail", { user });
};
