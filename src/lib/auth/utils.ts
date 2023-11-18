import { redirect } from "next/navigation";
import { getPageSession } from "./lucia";

export type AuthSession = {
  session: {
    user: {
      id: string;
      username: string;
      name: string;
      email: string;
      rut?: string;
      phone?: number;
      location?: string;
      image?: string;
      email_notifications?: boolean;
      trainer_active?: boolean;
      status?: string;
    };
  } | null;
};
export const getUserAuth = async (): Promise<AuthSession> => {
  const session = await getPageSession();
  if (!session) return { session: null };
  return {
    session: {
      user: {
        id: session.user?.userId,
        name: session.user?.name,
        email: session.user?.email,
        username: session.user?.username,
        rut: session.user?.rut,
        phone: session.user?.phone,
        location: session.user?.location,
        image: session.user?.image,
        email_notifications: session.user?.email_notifications,
        trainer_active: session.user?.trainer_active,
        status: session.user?.status,
      },
    },
  };
};

export const checkAuth = async () => {
  const session = await getPageSession();
  if (!session) {
    return null;
  } else {
    return session;
  }
};
