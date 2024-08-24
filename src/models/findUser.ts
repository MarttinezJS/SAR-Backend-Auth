import { Usuarios } from "../../generated/client";
import prismaClient from "../helpers/prismaClient";

export const findUser = async (
  username: string
): Promise<Partial<Usuarios> | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const found = await prismaClient.usuarios.findUnique({
        where: { username },
      });
      resolve(found);
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
