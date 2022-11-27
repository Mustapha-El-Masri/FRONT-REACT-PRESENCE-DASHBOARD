import http from "./AxiosContext";

const getAll = () => {
  return http.get("/users/");
};
const create = (data) => {
  return http.post("/users/create", data);
};
const createTask = (data) => {
  return http.post("/tasks/create", data);
};
const updateRh = (id, data) => {
  return http.put(`/users/rh/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/users/rh/${id}`);
};
const getById = (id) => {
  return http.get(`/users/${id}`);
};

export default { getAll, create, createTask, updateRh, remove, getById };
