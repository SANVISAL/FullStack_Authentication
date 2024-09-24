import { injectable } from "inversify";
import UserRepository from "../database/repository/user.repository";
import User, { UserCreationAttributes } from "../../models/user.model";

export class UserService {
  private _userRepository;
  public constructor() {
    this._userRepository = new UserRepository();
  }
  public async getAllUsers(): Promise<User[]> {
    try {
      const users = await this._userRepository.getAllUser();
      return users;
    } catch (err) {
      throw err;
    }
  }
  public async getUserById(id: string): Promise<User> {
    try {
      const user = await this._userRepository.getUserById(id);
      return user;
    } catch (err) {
      throw err;
    }
  }
  public async createUser(data: UserCreationAttributes): Promise<User> {
    try {
      const user = await this._userRepository.create(data);
      return user;
    } catch (err) {
      throw err;
    }
  }
  public async updateUser(id: number, data: User): Promise<User> {
    try {
      const updatedUser = await this._userRepository.update(id, data);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }
  public async deleteUser(id: string): Promise<void> {
    try {
      await this._userRepository.delete(id);
    } catch (err) {
      throw err;
    }
  }
}
