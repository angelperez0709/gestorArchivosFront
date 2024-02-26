const baseUrl =
  import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_FILES_URL;

export default async function deleteFolder(idFile, token) {
  const response = await fetch(`${baseUrl}delete.php`, {
    method: "DELETE",
    body: JSON.stringify({ idFile,token }),
  }).then((res) => {
    return res.json().then((data) => {
      return data;
    });
  });
  return response;
}
