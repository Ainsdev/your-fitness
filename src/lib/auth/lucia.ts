import { google } from "@lucia-auth/oauth/providers";
import { lucia } from "lucia";
import { nextjs_future } from "lucia/middleware";
import { cache } from "react";
import * as context from "next/headers";
import { prisma } from "@lucia-auth/adapter-prisma";
import { db } from "@/lib/db/index";

export const auth = lucia({
  adapter: prisma(db, {
    user: "user",
    key: "key",
    session: "session",
  }),
  env: "DEV",
  middleware: nextjs_future(),
  sessionCookie: { expires: false },
  getUserAttributes: (data) => {
    return {
      username: data.username,
      email: data.email,
      name: data.name,
      rut: data.rut,
      phone: data.phone,
      location: data.location,
      image: data.image,
      email_notifications: data.email_notifications,
      trainer_active: data.trainer_active,
      status: data.status,
    };
  },
});

export const googleAuth = google(auth, {
  clientId: process.env.GOOGLE_CLIENT_ID ?? "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  redirectUri: "http://localhost:3000/api/google/callback",
});

export type Auth = typeof auth;

export const getPageSession = cache(() => {
  if (!context) return null;
  const authRequest = auth.handleRequest("GET", context);
  return authRequest.validate();
});
