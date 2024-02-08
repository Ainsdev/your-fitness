import { UploadButton } from "@/lib/uploadthing";


const ButtonUpload = (props: any) => {
    return <UploadButton
    endpoint="userImage"
    onClientUploadComplete={(res) => {
      // Do something with the response
      console.log("Files: ", res);
      alert("Upload Completed");
    }}
    onUploadError={(error: Error) => {
      // Do something with the error.
      alert(`ERROR! ${error.message}`);
    }}
    appearance={
      {
        button: 'bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded underline'
      }
    }
    content={{
      button({ ready }) {
        if (ready) return <div>Subir Imagen</div>;
   
        return "Cargando...";
      },
      
    }}
    
  />
}