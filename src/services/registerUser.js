const baseUrl =
  import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_LOGIN_URL;

export default async function registerUser({username, password}) {
  const response = await fetch(`${baseUrl}create.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((res) => {
    return res.json().then((data) => {
      return data.data;
    });
  });
  return response;
}
