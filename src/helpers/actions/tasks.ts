import { get, post } from "../server";

export const fetchTasks = () => {
  return get("/tasks", null, localStorage.getItem("token"))
    .then((res: any) => {
      if (res.data.status >= 400) return null;
      return res.data;
    })
    .catch((err) => err);
};

export const fetchGrades = () => {
  return post("/grades", null, localStorage.getItem("token"))
    .then((res: any) => {
      if (res.data.status >= 400) return null;
      return res.data;
    })
    .catch((err) => err);
};

export const createTask = (title, description, priority, deadline) => {
  return post(
    "/tasks/new",
    {
      title,
      description,
      priority,
      is_resolved: false,
      deadline,
      created_at: null,
      updated_at: null,
    },
    localStorage.getItem("token")
  )
    .then((res: any) => {
      if (res.data.status >= 400) return null;
      return res.data;
    })
    .catch((err) => err);
};

export const updateTask = (id, is_resolved) => {
  return post(
    "/tasks/update",
    { id, is_resolved },
    localStorage.getItem("token")
  )
    .then((res: any) => {
      if (res.data.status >= 400) return null;
      return res.data;
    })
    .catch((err) => err);
};

export const deleteTask = (id) => {
  return post("/tasks/delete", { id }, localStorage.getItem("token"))
    .then((res: any) => {
      if (res.data.status >= 400) return null;
      return res.data;
    })
    .catch((err) => err);
};
