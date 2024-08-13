import { z } from "zod";

export const loginSchema = z.object({
  username: z.string({
    description: "usuario.",
    required_error: "El usuario es obligatorio.",
  }),
  password: z.string({
    description: "Contraseña del usuario.",
    required_error: "Contraseña requerida.",
  }),
});
