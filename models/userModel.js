let users = []; // data sementara

export const getAllUsers = () => users;

export const addUser = (name, age, gender, height, weight, activity, bmi, bmiCat, bmr, tdee) => {
  const newUser = { id: Date.now(), name, age, gender, height, weight, activity, bmi, bmiCat, bmr, tdee };
  users.push(newUser);
  return newUser;
};

export const findUserById = (id) => users.find(u => u.id == id);


export const updateUserById = (id, name, age, gender, height, weight, activity, bmi, bmiCat, bmr, tdee) => {
  users = users.map(u => (u.id === id ? { ...u, name, age, gender, height, weight, activity, bmi, bmiCat, bmr, tdee } : u));
};

export const deleteUserById = (id) => {
  users = users.filter(u => u.id !== id);
};
