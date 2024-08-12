import prismaClient from "../helpers/prismaClient";

export const findUserById = async (id: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const user = await prismaClient.usuarios.findUnique({
        where: { id },
        select: {
          email: true,
          id: true,
          eventsSupported: true,
          name: true,
          username: true,
          role: true,
          active: true,
        },
      });
      resolve(user);
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
