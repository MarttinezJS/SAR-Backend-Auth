import { Hono } from "hono";
import { jwt } from "hono/jwt";
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

const app = new Hono();
app.use(
  "/users/*",
  jwt({
    secret: process.env.JWT_SEED ?? "",
  })
);

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
