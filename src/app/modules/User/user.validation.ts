import { z } from "zod";

const updateSchema = z.object({
  body: z.object({
    password: z.string(),
    admin: z.object({
      name: z.string(),
      email: z.string(),
      contactNumber: z.string(),
    }),
  }),
});

export const UserValidation = {
  updateSchema,
};
