const baseUrl = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_FILES_URL;

export default async function getFiles(path, token) {
  const response = await fetch(`${baseUrl}index.php`, {
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
