import { injectable } from "inversify";
import { Token } from "../../../models/user-token.model";
import { IToken, IUpdateRrfreshToken } from "../../interface/common";

@injectable()
export class TokenRepository {
  public async issuer(issuerToken: IToken) {
    try {
      console.log("issuer token:", issuerToken);
      const tokenData = await Token.create({
        userId: issuerToken.userId,
        refreshToken: issuerToken.refreshToken,
        expireAt: issuerToken.expireAt,
      });
      console.log("Generated Token:", tokenData);
      return tokenData;
    } catch (error) {
      console.error("Error add token:", error);
      throw error;
    }
  }
  public async findRefresh(refreshToken: string) {
    try {
      const token = await Token.findOne({
        where: { refreshToken },
      });
      return token;
    } catch (error) {
      console.error("Error refresh token:", error);
      throw error;
    }
  }
  public async updateRefreshToken(token: IUpdateRrfreshToken) {
    try {
      await Token.update(
        { refreshToken: token.refreshToken, expireAt: token.expiresAt },
        { where: { userId: token.userId } }
      );
      console.log("Update refresh token successfully");
      return true;
    } catch (error) {
      console.error("Error update refresh token:", error);
      throw error;
    }
  }
  public async deleteRefreshToken(id: number, forceDelete = false) {
    try {
      await Token.destroy({ where: { userId: id }, force: forceDelete });
      console.log("Delete refresh token successfully");
    } catch (error) {
      console.error("Error delete refresh token:", error);
      throw error;
    }
  }

  public async getAllRefreshToken() {
    try {
      const tokens = await Token.findAll({ where: { deletedAt: null } });
      console.log("Get all refresh tokens:", tokens);
      return tokens;
    } catch (error) {
      console.error("Error get all refresh tokens:", error);
      throw error;
    }
  }
}
