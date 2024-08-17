import { Context, Env } from "hono";
import { sign } from "hono/jwt";
import { findUser } from "../models";
import { secrets } from "../config/vaultConfig";

const login = async (c: Context<Env, "/", {}>) => {
  const { username, password } = await c.req.json();
  try {
    const found = await findUser(username);
    if (found == null) {
      console.error("Usuario no existe");

      return c.json(
        {
          error: false,
          message: "Correo o contraseña incorrecta.",
        },
        400
      );
    }
    if (found.password && !Bun.password.verifySync(password, found.password)) {
      console.error("Contraseña incorrecta");
      return c.json(
        {
          error: false,
          message: "Correo o contraseña incorrecta.",
        },
        400
      );
    }
    const { role, id } = found;
    const token = await sign({ role, id }, process.env.JWT_SEED ?? "");

    return c.json({
      error: false,
      message: "",
      body: {
        access_token: token,
      },
    });
  } catch (error) {
    console.error(error);

    return c.json(
      {
        error: true,
        message: "Error al iniciar sesión.",
        body: error,
      },
      500
    );
  }
};

export { login };
