"use server";

import { getPageSession } from "@/lib/auth/lucia";
import { db } from "@/lib/db";

import { InternalServerError } from "@/lib/error-code";
import { trainerForm } from "@/lib/schemas";
import { delay } from "@/lib/security";
import { z } from "zod";

type FormValue = z.infer<typeof trainerForm>;
//Function to complete a form to be a trainer
export const doTrainerForm = async (schema: FormValue) => {
  const session = await getPageSession();
  try {
    if (!session || session.user.trainer_active) {
      console.log("SEsion invalida");
      throw new InternalServerError("No se pudo crear el formulario");
    }
    console.log("SessionID", session.user.userId);
    await db.user.update({
      where: {
        id: session.user.userId,
      },
      data: {
        trainer_active: true,
        bank_active: true,
        username: schema.name,
        name: schema.bank.accountbank_name,
        phone: schema.phone,
        rut: schema.rut,
        location: schema.location,
        bankAccount: {
          create: {
            accountbank_name: schema.bank.accountbank_name,
            accountbank_num: parseInt(schema.bank.accountbank_num),
            accountbank_type: parseInt(schema.bank.accountbank_type),
            accountbank_sbif: parseInt(schema.bank.accountbank_sbif),
            accountbank_personal_id: schema.rut,
          },
        },
        credits: {
          create: {
            credits: 0,
          },
        },
      },
    });
    console.log("Se creo el formulario");
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
