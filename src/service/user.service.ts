import { injectable, inject } from "inversify";
import UserRepository from "../database/repository/user.repository";
import { User } from "../../models/user.model";
import { IUser, IToken } from "../interface/common";
import { generateToken, getExpiryDate } from "../utils/jwt/jwt";
// import { HttpException } from "../utils/http-acception";
import { StatusCode } from "../utils/const/status-code";
import { TokenRepository } from "../database/repository/token.repository";
import { ResponseToken } from "../interface/common";
@injectable()
export class UserService {
  private _userRepository: UserRepository;
  private _tokenRepository: TokenRepository;

  public constructor(
    @inject(UserRepository) userRepository: UserRepository,
    @inject(TokenRepository) tokenRepository: TokenRepository
  ) {
    this._userRepository = userRepository;
    this._tokenRepository = tokenRepository;
  }
  // public async getAllUsers(): Promise<User[]> {
  //   try {
  //     const users = await this._userRepository.getAllUser();
  //     return users;
  //   } catch (err) {
  //     console.error("Error fetching all users:", err);
  //     throw err;
  //   }
  // }
  // public async getUserById(id: string): Promise<User | null> {
  //   try {
  //     const user = await this._userRepository.getUserById(id);
  //     return user;
  //   } catch (err) {
  //     console.error("Error fetching user by ID:", err);
  //     throw err;
  //   }
  // }
  public async createUser(
    data: IUser
  ): Promise<{ user: User; token: ResponseToken }> {
    try {
      const user = await this._userRepository.create(data);
      if (!user) {
        // throw new HttpException("User creation failed.", StatusCode.BadRequest);
      }
      //  GENERATE TOKE
      const token = await generateToken(user);

      const issuerToken: IToken = {
        userId: user.id,
        refreshToken: token.refreshToken,
        expiresAt: getExpiryDate(),
      };
      // ADD REFRESH TOKEN TO TABLE TOKEN
      await this._tokenRepository.issuer(issuerToken);
      return { user, token };
    } catch (err) {
      console.error("Error creating user:", err);
      // if (err instanceof HttpException) {
      //   throw err;
      // }
      // throw new HttpException(
      //   "Internal Server Error",
      //   StatusCode.InternalServerError
      // );
      throw err;
    }
  }
  // public async updateUser(id: number, data: Partial<IUser>): Promise<User> {
  //   try {
  //     const updatedUser = await this._userRepository.update(id, data);
  //     return updatedUser;
  //   } catch (err) {
  //     console.error("Error updating user:", err);
  //     throw err;
  //   }
  // }
  // public async deleteUser(id: string): Promise<void> {
  //   try {
  //     await this._userRepository.delete(id);
  //   } catch (err) {
  //     console.error("Error deleting user:", err);
  //     throw err;
  //   }
  // }
}
