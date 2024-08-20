import { decodeJwt } from "../services";

export const verifyToken = async (
  token: string | undefined
): Promise<boolean> => {
  try {
    if (token == null) {
      return false;
    }
    console.log(token);

    const data = await decodeJwt(token);
    return data != null;
  } catch (error) {
    console.warn(error);
    return false;
  }
};
