import { z } from "zod";

const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

export const AuthValidation = {
  loginSchema,
};
