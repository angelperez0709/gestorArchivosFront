const baseUrl = import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_FILES_URL;

export default async function uploadFile(file, token, id) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("id", id);
  formData.append("token", token);
  const response = await fetch(`${baseUrl}`, {
    method: "POST",
    body: formData,
  }).then((res) => {
    return res.json().then((data) => {
      return data;
    });
  });
  return response;
}
