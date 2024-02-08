import PostNewComponent from "@/components/forms/post-new-form";
import { getPageSession } from "@/lib/auth/lucia";

export default async function NewPostPage() {
  const session = await getPageSession();

  return (
    <div className="w-full h-full">
      <PostNewComponent 
      params={
        { 
          name: session?.user.name || "name",
          image: session?.user.image || "",
          location: session?.user.location || "",
        }
      }
      />
    </div>
  );
}