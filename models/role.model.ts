import { DataTypes, Sequelize } from "sequelize";
import { PrimaryModel } from "./primary.model";
import { User } from "./user.model";

export class Role extends PrimaryModel {
  public name!: string;

  public static initialize(sequelize: Sequelize) {
    Role.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "role",
      }
    );
  }

  public static associate() {
    Role.hasMany(User, {
      foreignKey: "roleId",
      as: "users",
    });
  }
}
