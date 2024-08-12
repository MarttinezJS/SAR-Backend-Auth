import { Usuarios } from "../generated/client";
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
        select: {
          active: true,
          email: true,
          eventsSupported: true,
          id: true,
          name: true,
          role: true,
          username: true,
        },
      });
      resolve(found);
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
