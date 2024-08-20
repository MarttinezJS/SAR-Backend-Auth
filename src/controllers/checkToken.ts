import { Context, Env } from "hono";
import { verify } from "hono/jwt";

export const checkToken = async (context: Context<Env, "/users/token", {}>) => {
  try {
    const { authorization } = context.req.header();
    const token = authorization.split(" ");
    const resp = await verify(token[1], process.env.JWT_SEED ?? "");
    if (resp) {
      return context.json({ error: false, message: "verificado", resp }, 200);
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
