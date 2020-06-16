import { USER_AUTH, LOG_OUT, USER_LOG_IN } from "./actionsTypes";

export const signUp = (User, avatar) => async (dispatch) => {
  console.log("user sign up");
  const formData = new FormData();
  formData.append("User", JSON.stringify(User));
  formData.append("avatar", avatar);

  const config = {
    method: "POST",
    body: formData,
  };

  const res = await fetch("http://192.168.43.121:5000/user/signup", config);
  const { token, status } = await res.json();
  localStorage.setItem("token", `bearer ${token}`);
  dispatch({ type: USER_AUTH, payload: status });
};

export const logIn = (User) => async (dispatch) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(User),
  };

  const res = await fetch("http://192.168.43.121:5000/user/login", config);
  const data = await res.json();

  if (data.user) {
    localStorage.setItem("token", `bearer ${data.token}`);
  }

  dispatch({ type: USER_LOG_IN, payload: data.user });
  console.log(data);
};

export const logOut = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOG_OUT });
};
