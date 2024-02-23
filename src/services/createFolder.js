const baseUrl = import.meta.env.VITE_BACKEND_URL+import.meta.env.VITE_DIRECTORY_URL;

export default async function createFolder(parentDirectory,name, token) {
    const response = await fetch(baseUrl+"createDirectory.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ parentDirectory,name }),
    }).then((res) => {
      return res.json().then((data) => {
       return data.data;
      });
    });
    return response;
  }