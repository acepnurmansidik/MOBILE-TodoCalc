import { requestAPI } from "./config";

const ROOT_API = `https://todolist-appkuh.herokuapp.com/api/v1`;

// GET data todolist
export const getToDoList = () => {
  const url = `${ROOT_API}/todo`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "GET", headers });
};

// PUT/PATCH data title
// PUT/PATCH data status
export const setStatusToDoList = (id, stParams) => {
  const url = `${ROOT_API}/todo/change/${id}?st=${stParams}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "PATCH", headers });
};
// POST data todolist
export const setCreateToDoList = (data) => {
  const url = `${ROOT_API}/todo`;
  let headers = {};

  return requestAPI({ url, method: "POST", data, headers });
};
// DELETE data todolist
export const setDeleteToDoList = (id) => {
  const url = `${ROOT_API}/todo/${id}`;
  let headers = {
    "Content-type": "application/json",
  };

  return requestAPI({ url, method: "DELETE", headers });
};
