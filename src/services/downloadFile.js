const baseUrl =
  import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_FILES_URL;

export default async function downloadFile(idFile, token) {
  const response = await fetch(`${baseUrl}download.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Description": "File Transfer",
      "Content-Disposition": "attachment; filename=downloaded-file",
      Authorization: `${token}`,
    },
    body: JSON.stringify({ idFile }),
  }).then((res) => {
    return res.blob().then((blob) => {
      let fileName = res.headers.get("Content-Disposition").split("filename=")[1];
      console.log(fileName)
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  });
  return response;
}
