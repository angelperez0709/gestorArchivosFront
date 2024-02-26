const baseUrl = import.meta.env.VITE_BACKEND_URL+import.meta.env.VITE_DIRECTORY_URL;

export default async function getDirectory(parentDirectory, token) {
  const response = await fetch(`${baseUrl}index.php`, {
    method: "POST",
    body: JSON.stringify({ parentDirectory,token }),
  }).then((res) => {
    return res.json().then((data) => {
      return data;
    });
  });
  return response;
}

export async function getDataDirectory(path, token) {
  const response = await fetch(`${baseUrl}data.php`, {
    method: "POST",
    body: JSON.stringify({ path,token }),
  }).then((res) => {
    return res.json().then((data) => {
      return data.data;
    });
  });
  return response;
}
