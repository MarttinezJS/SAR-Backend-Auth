import { UsuariosApp } from "../../generated/client";
import prismaClient from "../helpers/prismaClient";
import { openPrisma } from "../services";

export const registerToken = (data: UsuariosApp) => {
  data.update = new Date(Date.now());
  return openPrisma(
    async () =>
      await prismaClient.usuariosApp.create({
        data,
      })
  );
};

export const updateToken = (data: UsuariosApp) => {
  data.update = new Date(Date.now());
  return openPrisma(
    async () =>
      await prismaClient.usuariosApp.update({
        data,
        where: {
          deviceId: data.deviceId,
        },
      })
  );
};
