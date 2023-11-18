// app.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("@/lib/auth/lucia").Auth;
  type DatabaseUserAttributes = {
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
  type DatabaseSessionAttributes = {};
}
