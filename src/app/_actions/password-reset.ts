"use server";

import { generatePasswordResetToken } from "@/lib/auth/token";
import { db } from "@/lib/db";

import { InternalServerError } from "@/lib/error-code";
import { delay } from "@/lib/security";

export const doPasswordReset = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      console.log("No user found");
      return delay();
    }

    const token = await generatePasswordResetToken(user.id);
    await fetch("http://localhost:3000/api/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        email,
      }),
    }).catch((e) => console.log("Error sending email", e));

    return delay();
  } catch (e) {
    console.log(e);
    throw new InternalServerError("Contactate con soporte o intenta más tarde");
  }
};
