import { UploadButton } from "@/lib/uploadthing";
import { toast } from "./ui/use-toast";

export const ButtonUpload = (props: any) => {
  return (
    <UploadButton
      endpoint="userImage"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        toast({
          title: "Imagen actualizada",
          variant: "default",
        });
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        toast({
          title: "Error al subir la imagen",
          variant: "destructive",
        });
      }}
      appearance={{
        button:
          "bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded underline",
      }}
      content={{
        button({ ready }) {
          if (ready) return <div>Subir Imagen</div>;

          return "Cargando...";
        },
      }}
    />
  );
};
