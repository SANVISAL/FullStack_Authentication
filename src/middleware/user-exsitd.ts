import { Token, User } from "../../models";
import { IUser } from "../interface/common";
import { StatusCode } from "../utils/const/status-code";
import { HttpException } from "../utils/http-acception";

export const existedUser = async (data: IUser) => {
  try {
    const user = await User.findOne({ where: { email: data.email } });
    if (user) {
      throw new HttpException("Email already exists", StatusCode.Conflict);
    }
    console.log("User not conflict");
  } catch (error) {
    throw error;
  }
};

export const existedToken = async (refreshToken: string) => {
  try {
    const token = await Token.findOne({ where: { refreshToken } });
    if (!token) {
      throw new HttpException("Invalid refresh token", StatusCode.Unauthorized);
    }
    console.log("Token exists");
  } catch (error) {
    console.error("Error checking token existence:", error);
    throw error;
  }
};