import { Context, Env } from "hono";
import { findUser, saveUser } from "../models";
import { Usuarios } from "../../generated/client";
import { generateJwt } from "../services";

export const signUp = async (c: Context<Env, "/sign-up", {}>) => {
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
    const user = (await saveUser({
      ...body,
      password: cryptPassword,
    })) as Usuarios;
    const { role, id, firstName, lastName } = user;
    const token = await generateJwt(
      { role, id, name: `${firstName} ${lastName}` },
      360_000
    );
    return c.json(
      {
        error: false,
        message: "Usuario creado",
        body: {
          access_token: token,
        },
      },
      201
    );
  } catch (error) {
    return c.json(
      {
        error: true,
        message: "Error al crear usuario",
        body: error,
      },
      201
    );
  }
};
