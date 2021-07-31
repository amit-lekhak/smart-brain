const fetchProfile = (token) => {
  return fetch("/profile", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

const signoutUser = (token) => {
  return fetch("/logout", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

const saveToken = (token) => {
  if (!token) return;
  window &&
    window.sessionStorage &&
    window.sessionStorage.setItem("token", token);
};

const removeToken = () => {
  window && window.sessionStorage && window.sessionStorage.removeItem("token");
};

const getToken = () => {
  return (
    window && window.sessionStorage && window.sessionStorage.getItem("token")
  );
};

export { fetchProfile, saveToken, removeToken, getToken, signoutUser };
