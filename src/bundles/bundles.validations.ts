import { z } from "zod";

import { BundleTypes } from "./bundles.types";

export const bundleValidations = {
  type: z.nativeEnum(BundleTypes),
};
