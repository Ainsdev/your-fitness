'use server'
import { revalidatePath } from "next/cache";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { db } from "@/lib/db";
import { getPageSession } from "@/lib/auth/lucia";
const f = createUploadthing();

const sessionUser = getPageSession();
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(async (req) => {
      // This code runs on your server before upload
      const session = await sessionUser;
      // If you throw, the user will not be able to upload
      if (!session) throw new Error("Unauthorized");
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      await db.user.update({
        where: { id: metadata.userId },
        data: { image: file.url },
      });
      revalidatePath("/dashboard/account");
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
