// Dependencies
import { z } from "zod";

// ValidationSchema
import { newSaleSchema } from "./schema";

// Type for the form inputs derived from the Zod schema
type Client = Omit<z.infer<typeof newSaleSchema>["client"], "type" | "sector" | "gender"> & {
  type: z.infer<typeof newSaleSchema>["client"]["type"] | "";
  sector: z.infer<typeof newSaleSchema>["client"]["sector"] | "";
  gender: z.infer<typeof newSaleSchema>["client"]["gender"] | "";
};

/**
 * Type for the bundle input derived from the Zod schema.
 * It can be either the inferred type from the schema or an empty string.
 */
type Bundle = z.infer<typeof newSaleSchema>["bundle"] | "";

export type NewSaleFormValues = Omit<z.infer<typeof newSaleSchema>, "client" | "bundle"> & {
  bundle: Bundle;
  client: Client;
};

export interface NewSaleFormProps {
  isLoading: boolean;
  onSubmit: (data: NewSaleFormValues) => void;
}
