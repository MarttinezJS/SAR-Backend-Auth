import NodeVault = require("hashi-vault-js");

interface Secrets {
  jwt_seed: string;
  context: string;
}

let secrets: Secrets;

const vault = new NodeVault({
  baseUrl: `http://${process.env.VAULT_HOST}:${process.env.VAULT_PORT}/v1`,
  timeout: 5000,
  proxy: false,
});

const initVault = async (): Promise<any> => {
  try {
    const result = await vault.loginWithAppRole(
      process.env.ROL_ID ?? "",
      process.env.SECRET_ID ?? ""
    );

    const token = result.client_token;
    const commonResp = await vault.readKVSecret(token, "common");
    const authResp = await vault.readKVSecret(token, "auth-backend");

    secrets = Object.assign(commonResp.data, authResp.data);
    return result;
  } catch (err: any) {
    if (err.isVaultError) {
      console.log(err);
      return err;
    } else {
      throw err;
    }
  }
};

export { initVault, secrets };
