import { z } from "zod";

const ClientSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  isAdm: z.boolean(),
  city: z.string(),
  state: z.string(),
  postal_code: z.string(),
  address: z.string(),
  phone_number: z.string(),
});

export default ClientSchema;
