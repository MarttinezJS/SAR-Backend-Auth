import { Hono } from "hono";
import { loginSchema, userSchema } from "./schemas";
import {
  checkToken,
  createUser,
  gentUser,
  getAll,
  login,
  signUp,
} from "./controllers";
import { validateFields } from "./middlewares/validateFields";
import { initJwk } from "./config";
import { setBoundData } from "./services";
import { verifyToken } from "./middlewares";

const serve = async () => {
  await initJwk();
  setBoundData();
  const app = new Hono();
  app.use("/users/*", async (c, next) => {
    const token = c.req.header("Authorization");
    const pass = await verifyToken(token?.split(" ").pop());
    if (pass) {
      return next();
    }
    return c.json(
      {
        error: true,
        status: 401,
        message: "Usuario no autorizado",
      },
      401
    );
  });

  app.get("/users", getAll);
  app.get("/users/token", checkToken);
  app.get("/users/:id", gentUser);
  app.post("/users", validateFields(userSchema), createUser);
  app.post("/login", validateFields(loginSchema), login);
  app.post("/sign-up", validateFields(userSchema), signUp);
  app.post("/8B7HMzd49AqIyo", createUser);

  Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT,
  });
  console.info(`Servidor corriendo en el puerto: ${process.env.PORT}`);
};

serve();
