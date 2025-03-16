import { UsuariosApp } from "../../generated/client";
import prismaClient from "../helpers/prismaClient";
import { openPrisma } from "../services";

export const registerToken = (data: UsuariosApp) =>
  openPrisma(
    async () =>
      await prismaClient.usuariosApp.create({
        data,
      })
  );
