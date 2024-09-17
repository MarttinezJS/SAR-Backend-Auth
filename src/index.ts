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
import { decodeJwt, setBoundData } from "./services";
import { verifyToken } from "./middlewares";

const serve = async () => {
  const app = new Hono();

  await initJwk();
  setBoundData();

  app.use("*", (c, next) => {
    console.info(`${c.req.path} | ${c.req.method}`);
    return next();
  });
  app.use("/users/*", verifyToken);

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
