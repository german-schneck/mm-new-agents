import { z } from "zod";

import { BundleTypes } from "@/bundles/bundles.types";
import { ClientGenderTypes, ClientIdentityTypes, SectorTypes } from "@/clients/clients.types";

export const newSaleSchema = z.object({
  bundle: z.nativeEnum(BundleTypes),
  client: z.object({
    sector: z.nativeEnum(SectorTypes),
    dni: z
      .string()
      .regex(/^[0-9]{8}[A-Z]$/, { message: "forms.new_sale_form.validation.dni" })
      .min(1, { message: "forms.new_sale_form.validation.dni_required" }),
    type: z.nativeEnum(ClientIdentityTypes),
    firstName: z.string().min(1, { message: "forms.new_sale_form.validation.first_name_required" }),
    lastName: z.string().min(1, { message: "forms.new_sale_form.validation.last_name_required" }),
    gender: z.nativeEnum(ClientGenderTypes),
    country: z.string().min(1, { message: "forms.new_sale_form.validation.country_required" }),
    language: z.string().min(1, { message: "forms.new_sale_form.validation.language_required" }),
    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, { message: "forms.new_sale_form.validation.phone_number" })
      .min(1, { message: "forms.new_sale_form.validation.phone_number_required" }),
    emailAddress: z
      .string()
      .email({ message: "forms.new_sale_form.validation.email_address" })
      .min(1, { message: "forms.new_sale_form.validation.email_address_required" }),
    physicalAddress: z.string().min(1, { message: "forms.new_sale_form.validation.physical_address_required" }),
  }),
});
