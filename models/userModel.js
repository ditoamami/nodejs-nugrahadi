let users = []; // data sementara

export const getAllUsers = () => users;

export const addUser = (name) => {
  const newUser = { id: Date.now(), name };
  users.push(newUser);
  return newUser;
};

export const findUserById = (id) => users.find(u => u.id === id);

export const updateUserById = (id, name) => {
  users = users.map(u => (u.id === id ? { ...u, name } : u));
};

export const deleteUserById = (id) => {
  users = users.filter(u => u.id !== id);
};
