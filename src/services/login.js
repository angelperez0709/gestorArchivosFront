const baseUrl =
  import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_LOGIN_URL;

export default async function loginService({ username, password }) {
  const response = await fetch(`${baseUrl}index.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => {
      return res.json().then((res) => {
        return res;
      });
    })
    .catch((error) => {
     return {
        ok: false,
        data: error,
     }
    });
  return response;
}

export async function changeDataUser({username,newPassword,repeatedPassword,token}){
  const response = await fetch(`${baseUrl}change.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${token}`
    },
    body: JSON.stringify({ username, newPassword, repeatedPassword }),
  })
    .then((res) => {
      return res.json().then((res) => {
        return res;
      });
    })
    .catch((error) => {
     return {
        ok: false,
        data: error,
     }
    });
  return response;
}