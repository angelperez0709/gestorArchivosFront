const baseUrl = "http://localhost/api/login/index.php";

export default async function loginService({ username, password }) {
 const response = await fetch(baseUrl, {
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
