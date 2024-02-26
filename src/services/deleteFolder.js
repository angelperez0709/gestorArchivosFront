const baseUrl = import.meta.env.VITE_BACKEND_URL+import.meta.env.VITE_DIRECTORY_URL;

export default async function deleteFolder(idDirectory, token) {
  const response = await fetch(`${baseUrl}delete.php`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Methods": "DELETE",
      Authorization: `${token}`,
    },
    body: JSON.stringify({ idDirectory }),
  }).then((res) => {
    return res.json().then((data) => {
    return data;
    });
  });
  return response;
}
