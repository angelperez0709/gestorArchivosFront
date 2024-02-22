const baseUrl = "http://localhost/api/files/";

export default async function uploadFile(file, token, id) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("id", id);
  const response = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      Authorization: `${token}`
    },
    body: formData,
  }).then((res) => {
    return res.json().then((data) => {
      return data;
    });
  });
  return response;
}
