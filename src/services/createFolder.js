const baseUrl = "http://localhost/api/directory/createDirectory.php";

export default async function createFolder(parentDirectory,name, token) {
    const response = await fetch(baseUrl, {
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