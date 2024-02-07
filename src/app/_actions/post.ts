"use server";

import { getPageSession } from "@/lib/auth/lucia";
import { db } from "@/lib/db";

import { InternalServerError } from "@/lib/error-code";
import { newTrainerPost } from "@/lib/schemas";
import { delay } from "@/lib/security";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const addPost = async (data: z.infer<typeof newTrainerPost>) => {
  const session = await getPageSession();
  try {
    if (!session || !session.user.trainer_active) {
      throw new InternalServerError("No se pudo crear el post");
    }
    await db.trainerPost.create({
      data: {
        credits: data.credits,
        experience: data.experience,
        category: data.category,
        subcategory: data.subcategory,
        methodology: data.methodology,
        images: data.images as any,
        social_medias: data.social_medias,
        free_days: data.free_days,
        default_days: data.default_days,
        default_hours: data.default_hours,
        title: data.title,
        bio: data.bio,
        course_info: data.course_info,
        location: data.location,
        phone: session.user.phone as string,
        name: session.user.name as string,
        trainer: {
          connect: {
            id: session.user.userId,
          },
        },
      },
    });
    revalidatePath("/dashboard/trainer/profile");
    return delay();
  } catch (e) {
    console.log("ERROR TPYE:", e);
    throw new InternalServerError(
      "Algo Salio mal, revisa los datos ingresados"
    );
  }
};

export const doPausePost = async (id: string, bool: boolean) => {
  const session = await getPageSession();
  try {
    if (!session || !session.user.trainer_active) {
      throw new InternalServerError("No se pudo pausar el post");
    }
    await db.trainerPost.update({
      where: {
        id: id,
      },
      data: {
        disabled: bool,
      },
    });
    return delay();
  } catch (e) {
    console.log("ERROR TPYE:", e);
    throw new InternalServerError(
      "Algo Salio mal, revisa los datos ingresados"
    );
  }
};

export const doDeletePost = async (id: string) => {
  const session = await getPageSession();
  try {
    if (!session || !session.user.trainer_active) {
      throw new InternalServerError("No se pudo eliminar el post");
    }
    await db.trainerPost.delete({
      where: {
        id: id,
      },
    });
    return delay();
  } catch (e) {
    console.log("ERROR TPYE:", e);
    throw new InternalServerError(
      "Algo Salio mal, revisa los datos ingresados"
    );
  }
};
