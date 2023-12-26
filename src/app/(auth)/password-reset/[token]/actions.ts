"use server";

import { auth } from "@/lib/auth/lucia";
import { validatePasswordResetToken } from "@/lib/auth/token";
import { BadRequestError } from "@/lib/error-code";
import { cookies } from "next/headers";

export const resetPaswordAction = async (token: string, password: string) => {
  try {
    const userId = await validatePasswordResetToken(token);
    let user = await auth.getUser(userId);
    await auth.invalidateAllUserSessions(user.userId);
    await auth.updateKeyPassword("email", user.email, password);
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });

    const sessionCookie = auth.createSessionCookie(session);

    cookies().set(sessionCookie);

    return;
  } catch (e: any) {
    throw new BadRequestError(e.message);
  }
};
