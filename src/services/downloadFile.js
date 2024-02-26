const baseUrl =
  import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_FILES_URL;

export default async function downloadFile(idFile, token) {
  const response = await fetch(`${baseUrl}download.php`, {
    method: "POST",
    Headers:{
      "Content-Description": "File Transfer",
      "Content-Disposition": "attachment; filename=download-filename",
      "Accept": "/",
      "Accept-Encoding": "gzip, deflate, br,zstd",
      "Accept-Language": "es-ES,es;q=0.9",
      "Origin": "https://gestor-archivos-front.vercel.app",
      "Referer": "https://gestor-archivos-front.vercel.app/",
    },
    body: JSON.stringify({ idFile,token }),
  }).then((res) => {
    return res.blob().then((blob) => {
      let fileName = sessionStorage.getItem("name");
      const url = window.URL.createObjectURL(new Blob([blob]));
      console.log(url);
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
