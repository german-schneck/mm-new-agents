// Dependencies
import { z } from "zod";

// ValidationSchema
import { Bundle } from "@/bundles/bundles.types";
import { Client } from "@/clients/clients.types";

import { newSaleSchema } from "./schema";

export type NewSaleFormValues = Omit<z.infer<typeof newSaleSchema>, "client" | "bundle"> & {
  bundle: Partial<Bundle>;
  client: Partial<Client>;
};

export interface NewSaleFormProps {
  isLoading: boolean;
  onSubmit: (data: NewSaleFormValues) => void;
}
