import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string({
    description: "Nombre de la persona.",
    required_error: "Se necesita los nombres.",
  }),
  lastName: z.string({
    description: "Apellido de la persona.",
    required_error: "Se necesitan los apellidos.",
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
});
