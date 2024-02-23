const baseUrl = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_LOGIN_URL;

export default async function loginService({ username, password }) {
 const response = await fetch(`${baseUrl}index.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((res) => {
    return res.json().then(res => {
      return res;
    });
  });
  return response
}
