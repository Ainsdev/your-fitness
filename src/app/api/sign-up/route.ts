import { auth } from "@/lib/auth/lucia";
import { LuciaError } from "lucia";
import * as context from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  // basic check
  if (typeof email !== "string" || email.length < 4 || email.length > 31) {
    return NextResponse.json(
      {
        error: "Correo inválido",
      },
      {
        status: 400,
      }
    );
  }
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 36
  ) {
    return NextResponse.json(
      {
        error: "Contraseña inválida",
      },
      {
        status: 400,
      }
    );
  }
  try { 
    const user = await auth.createUser({
      key: {
        providerId: "email", // auth method
        providerUserId: email.toLowerCase(), // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        username: "", // username is optional, you can use it as "display name
        name: "",
        email: email.toLowerCase(),
      },
    });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(request.method, context);
    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/", // redirect to profile page
      },
    });
  } catch (e) {
    // this part depends on the database you're using
    // check for unique constraint error in user table
    console.log(e);
    if (e instanceof LuciaError && e.message === "AUTH_DUPLICATE_KEY_ID") {
      return NextResponse.json(
        {
          error: "Este correo ya está registrado",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        error: "Estamos teniendo problemas, intenta más tarde.",
      },
      {
        status: 500,
      }
    );
  }
};
