"use server";

import { getPageSession } from "@/lib/auth/lucia";
import { db } from "@/lib/db";

import { InternalServerError } from "@/lib/error-code";
import { trainerForm } from "@/lib/schemas";
import { delay } from "@/lib/security";
import { z } from "zod";

type FormValue = z.infer<typeof trainerForm>;

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
            accountbank_num: schema.bank.accountbank_num,
            accountbank_type: schema.bank.accountbank_type,
            accountbank_sbif: schema.bank.accountbank_sbif,
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
    console.log("ERROR TPYE:",e);
    throw new InternalServerError(
      "Algo Salio mal, revisa los datos ingresados"
    );
  }
};
