const baseUrl = "http://localhost/api/files/index.php";

export default async function getFiles(path, token) {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({ path }),
  }).then((res) => {
    return res.json().then((data) => {
      return data;
    });
  });
  return response;
}
