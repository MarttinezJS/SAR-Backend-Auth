import { z } from "zod";

export const userSchema = z.object({
  name: z.string({
    description: "Nombre de la persona.",
    required_error: "Se necesita el nombre completo.",
  }),
  email: z
    .string({
      description: "Correo del usuario",
      required_error: "Correo obligatorio.",
    })
    .email("Correo no válido."),
  username: z.string({
    description: "Usuario",
    required_error: "El usuario es requerido.",
  }),
  password: z.string({
    description: "Contraseña de la cuenta",
    required_error: "La contraseña es requerida.",
  }),
  role: z.string({
    description: "Rol del usuario",
    required_error: "Se necesita un rol para el usuario.",
  }),
});
