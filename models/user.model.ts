import { DataTypes, Sequelize } from "sequelize";
// import { sequelize } from "../src/database/sequelize-source";
import { PrimaryModel } from "./primary.model";
import { Token } from "./user-token.model";

export class User extends PrimaryModel {
  public userName!: string;
  public gender!: string;
  public email!: string;
  public password!: string;
  public static initialize(sequelize: Sequelize) {
    User.init(
      {
        userName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: "Users",
      }
    );
  }
  public static associate() {
    User.hasMany(Token, {
      foreignKey: "userId",
      as: "tokens",
    });
  }
}
