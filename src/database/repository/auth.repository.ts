import { injectable } from "inversify";
import { User } from "../../../models";
import { IUser, loginType } from "../../interface/common";

@injectable()
export default class AuthRepository {
  public async register(data: IUser): Promise<User> {
    try {
      const user = await User.create(data as any);
      console.log("User :", user);
      return user;
    } catch (err) {
      console.error("Error creating user:", err);
      throw err;
    }
  }
  public async findByEmail(email: string) {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
