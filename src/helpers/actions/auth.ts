import { get, post } from "../server";
export const login = (data) => {};

export const fetchUser = () => {
  return get("/auth/user", null, localStorage.getItem("token"))
    .then((res: any) => {
      if (res.data.status >= 400) return null;
      return res.data;
    })
    .catch((err) => err);
};
