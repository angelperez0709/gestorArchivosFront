const baseUrl = "http://localhost/api/files/";

export default async function deleteFolder(idFile, token) {
  const response = await fetch(`${baseUrl}delete.php`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "DELETE",
      Authorization: `${token}`,
    },
    body: JSON.stringify({ idFile }),
  }).then((res) => {
    return res.json().then((data) => {
    return data;
    });
  });
  return response;
}
