import { DataTypes, Model } from "sequelize";
import { sequelize } from "../src/database/sequelize-source";

export class PrimaryModel extends Model {
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date | null;
  public readonly deletedAt!: Date | null;
}

PrimaryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: true, // Automatically manages createdAt and updatedAt
    paranoid: true, // Enables soft delete with deletedAt
  }
);
