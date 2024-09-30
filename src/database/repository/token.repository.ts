import { injectable } from "inversify";
import { Token } from "../../../models/user-token.model";
import { IToken } from "../../interface/common";

@injectable()
export class TokenRepository {
  public async issuer(issuerToken: IToken) {
    try {
      console.log("issuer token:", issuerToken);
      const tokenData = await Token.create({
        userId: issuerToken.userId, // Pass userId directly
        refreshToken: issuerToken.refreshToken, // Pass refreshToken directly
        expireAt: issuerToken.expiresAt, // Pass expiresAt directly
      });
      console.log("Generated Token:", tokenData);
      return tokenData;
    } catch (error) {
      console.error("Error add token:", error);
      throw error;
    }
  }
}
