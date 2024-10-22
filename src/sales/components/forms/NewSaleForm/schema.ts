import { z } from "zod";

import { bundleValidations } from "@/bundles/bundles.validations";
import { clientValidations } from "@/clients/clients.validations";

export const newSaleSchema = z.object({
  bundle: bundleValidations.type,
  client: z.object({
    sector: clientValidations.sector,
    dni: clientValidations.dni,
    type: clientValidations.type,
    firstName: clientValidations.firstName,
    lastName: clientValidations.lastName,
    gender: clientValidations.gender,
    country: clientValidations.country,
    language: clientValidations.language,
    phoneNumber: clientValidations.phoneNumber,
    emailAddress: clientValidations.emailAddress,
    physicalAddress: clientValidations.physicalAddress,
  }),
});
