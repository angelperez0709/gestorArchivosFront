const baseUrl = import.meta.env.VITE_BACKEND_URL+import.meta.env.VITE_DIRECTORY_URL;

export default async function createFolder(parentDirectory,name, token) {
    const response = await fetch(baseUrl+"createDirectory.php", {
      method: "POST",
      body: JSON.stringify({ parentDirectory,name,token }),
    }).then((res) => {
      return res.json().then((data) => {
       return data.data;
      });
    });
    return response;
  }