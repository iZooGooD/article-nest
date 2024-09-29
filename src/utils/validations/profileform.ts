import { z } from "zod";

export const profileInputSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name should have minimum 2 characters")
    .max(30, "First name should have maximum 30 characters"),
  lastName: z
    .string()
    .min(2, "Last name should have minimum 2 characters")
    .max(30, "Last name should have maximum 30 characters"),
  email: z.string().email("Invalid email address"),
});
