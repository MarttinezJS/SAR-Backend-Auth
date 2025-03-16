import { Context, Env } from "hono";
import { UsuariosApp } from "../../generated/client";
import { v7 as uuid } from "uuid";
import { registerToken } from "../models/registerToken";
export const registerFmToken = async (context: Context<Env, "", {}>) => {
  const body = await context.req.json<UsuariosApp>();
  if (body.deviceId == null) {
    body.deviceId = uuid();
  } else {
    return context.json(
      {
        error: false,
        message: "Usuario previamente registrado.",
        status: 200,
      },
      200
    );
  }
  const resp = await registerToken(body);
  if (resp.isError) {
    return context.json(
      {
        error: resp.isError,
        message: resp.message,
        status: resp.statusCode,
        body: resp.meta,
      },
      resp.statusCode
    );
  }

  return context.json(
    {
      error: false,
      message: "Usuario de app registrado.",
      status: 201,
      body: resp.data,
    },
    201
  );
};
