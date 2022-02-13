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

// PUT data title
// PUT data status
// POST data todolist
// DELETE data todolist
