const baseUrl = "http://localhost/api/directory/";

export default async function getDirectory(parentDirectory, token) {
  const response = await fetch(`${baseUrl}index.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({ parentDirectory }),
  }).then((res) => {
    return res.json().then((data) => {
      return data.data;
    });
  });
  return response;
}

export async function getDataDirectory(id, token) {
  const response = await fetch(`${baseUrl}data.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({ id }),
  }).then((res) => {
    return res.json().then((data) => {
      return data.data;
    });
  });
  return response;
}
