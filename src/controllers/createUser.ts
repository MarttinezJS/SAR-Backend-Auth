import { Context, Env } from "hono";
import { findUser, saveUser } from "../models";
import { Usuarios } from "../generated/client";

const createUser = async (c: Context<Env, "/", {}>) => {
  const { password, ...body } = (await c.req.json()) as Usuarios;
  const cryptPassword = Bun.password.hashSync(password);
  try {
    const found = await findUser(body.username);
    if (found) {
      return c.json(
        {
          error: true,
          message: "Error al registrar.",
        },
        400
      );
    }
    const resp = await saveUser({ ...body, password: cryptPassword });
    return c.json(
      {
        error: false,
        message: "Usuario creado",
        body: resp,
      },
      201
    );
  } catch (error: any) {
    console.error(error);
    return c.json(
      {
        error: true,
        message: "Error al crear usuario",
        body: error.message,
      },
      400
    );
  }
};

export { createUser };
