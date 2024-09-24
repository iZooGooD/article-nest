import { z } from "zod";

export const searchSchema = z
  .string()
  .min(3, "Search query must be at least 3 characters long")
  .regex(
    /^[a-zA-Z0-9 ]*$/,
    "Search query can only contain alphanumeric characters and spaces"
  );
