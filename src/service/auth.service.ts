import { inject, injectable } from "inversify";
import AuthRepository from "../database/repository/auth.repository";
import {
  IToken,
  IUpdateRrfreshToken,
  IUser,
  loginType,
  ResponseToken,
} from "../interface/common";
import { Token, User } from "../../models";
import { RoleRepository } from "../database/repository/role.repository";
import { HttpException } from "../utils/http-acception";
import { StatusCode } from "../utils/const/status-code";
import { generateToken, getExpiryDate } from "../utils/jwt/jwt";
import { TokenRepository } from "../database/repository/token.repository";
import { ApiError } from "../utils/api-error";
import { validator } from "../middleware/validator";
import UserRepository from "../database/repository/user.repository";

@injectable()
export class AuthService {
  private _authRepository: AuthRepository;
  private _roleRepository: RoleRepository;
  private _tokenRepository: TokenRepository;
  private _userRepository: UserRepository;
  constructor(
    @inject(AuthRepository) authRepository: AuthRepository,
    @inject(RoleRepository) roleRepository: RoleRepository,
    @inject(TokenRepository) tokenRepository: TokenRepository,
    @inject(UserRepository) userRepository: UserRepository
  ) {
    this._authRepository = authRepository;
    this._roleRepository = roleRepository;
    this._tokenRepository = tokenRepository;
    this._userRepository = userRepository;
  }
  public async register(
    data: IUser
  ): Promise<{ user: User; token: ResponseToken }> {
    try {
      const role = await this._roleRepository.findRoleById(data.roleId);
      const user = await this._authRepository.register(data);
      if (!user) {
        throw new HttpException("User creation failed.", StatusCode.BadRequest);
      }
      const name = role?.name;
      const token = await generateToken(user, name as string);
      const issuerToken: IToken = {
        userId: user.id,
        refreshToken: token.refreshToken,
        expireAt: getExpiryDate(),
      };
      await this._tokenRepository.issuer(issuerToken);

      return { user, token };
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }
      console.error("Error creating user:", err);
      throw new ApiError("Registration failed.");
    }
  }
  public async login(data: loginType) {
    try {
      console.log("Data:", data);
      const userData = await validator(data.email, data.password);
      // const user = await this._userRepository.getUserById(userData.id);
      const role = await this._roleRepository.findRoleById(userData.roleId);
      const name = role?.name;
      const token = await generateToken(userData, name as string);
      const updateToken: IUpdateRrfreshToken = {
        userId: userData.id,
        refreshToken: token.refreshToken,
        expiresAt: getExpiryDate(),
      };
      await this._tokenRepository.updateRefreshToken(updateToken);
      // await this._tokenRepository.issuer(issuerToken);
      return { userData, token };
    } catch (error) {
      throw error;
    }
  }
}
