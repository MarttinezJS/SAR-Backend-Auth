import { Context, Env } from "hono";
import { decodeJwt } from "../services";

export const checkToken = async (context: Context<Env, "/users/token", {}>) => {
  try {
    const { authorization } = context.req.header();
    const token = authorization.split(" ");
    const resp = await decodeJwt(token[1]);
    if (resp) {
      return context.json(
        { error: false, message: "verificado", body: resp },
        200
      );
    }
    return context.json({
      error: true,
      message: "Token no verificado",
    });
  } catch (error) {
    console.warn(error);
    return context.json({
      error: true,
      message: "Error al verificar",
      body: error,
    });
  }
};
