import { useDropzone } from "react-dropzone";
//const fileTypes = ["PDF", "JPG", "PNG", "WEBP"];

export default function DraggableItem({ handleDragOver }) {



  const onDrop = (acceptedFiles) => {
    handleDragOver(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png",".jpg",".jpeg",".webp"],
      "text/html": [".html", ".htm"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div className="container">
      <div {...getRootProps({ className: "p-8 mt-5 border-4 border-dashed rounded-lg" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>drop files here, or click to select files</p>
        )}
      </div>
    </div>
  );
}
