import { Usuarios } from "../generated/client";
import prismaClient from "../helpers/prismaClient";

export const saveUser = async (user: Usuarios): Promise<Usuarios | unknown> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const { password, ...userSaved } = await prismaClient.usuarios.create({
        data: user,
      });
      resolve(userSaved);
    } catch (error) {
      console.error(error);
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
