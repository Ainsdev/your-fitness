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

export const newTrainerPost = z.object({
  credits: z.number().min(5000, { message: "El precio debe ser mayor a 5k" }),
  experience: z.number(),
  category: z.string(),
  subcategory: z.string().optional(),
  methodology: z.string().optional(),
  images: z
    .unknown()
    .refine((val) => {
      if (!Array.isArray(val)) return false;
      if (val.some((file) => !(file instanceof File))) return false;
      return true;
    }, "Must be an array of File")
    .optional()
    .nullable()
    .default(null),
  social_medias: z.string().optional(),
  free_days: z.number().optional(),
  default_days: z.number().optional(),
  default_hours: z.number().optional(),
  title: z.string().min(8, { message: "El titulo es muy corto" }),
  description: z.string().min(15, { message: "La descripcion es muy corta" }),
  course_info: z.string().min(10, { message: "La informacion del curso es muy corta" }),
  location: z.string(),
});
