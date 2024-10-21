import { User } from "../../models";
export const validator = async (email: string, password: string) => {
  try {
    console.log("email:", email, "password:", password);
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw Error("invalid email or password");
    }
    if (user.password != password) {
      throw Error("invalid email or password");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
