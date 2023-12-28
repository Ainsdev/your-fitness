import { cleanRut, validateRut } from "rut-validator-formatter";
import { z } from "zod";


export const trainerForm = z.object({
    name: z.string().min(4, { message: "El nombre es muy corto" }),
    phone: z.string().min(9, { message: "El telefono no es valido }" }),
    rut: z.string().refine((value) => validateRut(cleanRut(value)), {
      message: "El rut no es valido",
    }),
    location: z.string(),
    bank: z.object({
      accountbank_name: z.string(),
      accountbank_personal_id: z.string().optional(),
      accountbank_sbif: z.string(),
      accountbank_type: z.string(),
      accountbank_num: z.string(),
    }),
  });
  