import User, { UserCreationAttributes } from "../../../models/user.model";

export default class UserRepository {
  public async getAllUser(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (err) {
      console.error("Error fetching user data:", err);
      throw err;
    }
  }
  public async getUserById(id: string): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (err) {}
  }
  public async create(data: User): Promise<User> {
    try {
      const user = await User.create(data);
      return user;
    } catch (err) {
      throw err;
    }
  }
  public async update(id: number, data: User): Promise<User> {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      const updateUser = await user.update(data);
      return updateUser;
    } catch (err) {
      throw err;
    }
  }
  public async delete(id: string): Promise<void> {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      const deleteUser = await user.destroy();
      return deleteUser;
    } catch (err) {
      throw err;
    }
  }
}
