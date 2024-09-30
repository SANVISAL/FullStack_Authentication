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
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
  }
);
