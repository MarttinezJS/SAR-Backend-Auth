import { Usuarios } from "../generated/client";
import prismaClient from "../helpers/prismaClient";

export const getAll = async (
  page: number,
  size: number
): Promise<Usuarios[] | unknown> => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }
    try {
      const offset = page * size;
      const users = await prismaClient.usuarios.findMany({
        take: size,
        skip: offset,
        select: {
          email: true,
          id: true,
          username: true,
          name: true,
          eventsSupported: true,
          role: true,
          active: true,
        },
      });
      const count =
        (await prismaClient.$queryRaw`select count(*) as count from Usuarios`) as [
          { count: string }
        ];
      resolve({
        count: Number.parseInt(count[0].count),
        next: users.length == size ? page + 1 : null,
        previous: page > 0 ? page - 1 : null,
        results: users,
      });
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
