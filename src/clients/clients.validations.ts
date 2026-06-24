import { z } from "zod";

import { Client, ClientGenderTypes, ClientIdentityTypes, SectorTypes } from "./clients.types";

export const clientValidations: Record<keyof Client, z.ZodTypeAny> = {
  id: z.string(),
  sector: z.nativeEnum(SectorTypes),
  dni: z
    .string()
    .regex(/^\d{8}[A-Z]$/, { message: "validations.client.dni" })
    .min(1, { message: "validations.client.dni_required" }),
  type: z.nativeEnum(ClientIdentityTypes),
  firstName: z.string().min(1, { message: "validations.client.first_name_required" }),
  lastName: z.string().min(1, { message: "validations.client.last_name_required" }),
  gender: z.nativeEnum(ClientGenderTypes),
  birthDate: z.date(),
  country: z.string().min(1, { message: "validations.client.country_required" }),
  language: z.string().min(1, { message: "validations.client.language_required" }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "validations.client.phone_number" })
    .min(1, { message: "validations.client.phone_number_required" }),
  emailAddress: z
    .string()
    .email({ message: "validations.client.email_address" })
    .min(1, { message: "validations.client.email_address_required" }),
  physicalAddress: z.string().min(1, { message: "validations.client.physical_address_required" }),
};
