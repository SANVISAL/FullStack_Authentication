"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("Users", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        // roleId: {
        //   type: Sequelize.INTEGER,
        //   allowNull: true,
        //   references: {
        //     model: "roles",
        //     key: "id",
        //   },
        //   onUpdate: "CASCADE",
        //   onDelete: "SET NULL",
        // },
        userName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: null,
        },
      });
    } catch (error) {
      console.error("Error during Users table migration:", error);
      throw error; // Re-throw to ensure the migration fails
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable("Users");
    } catch (error) {
      console.error("Error during rollback of Users table migration:", error);
      throw error; // Re-throw to ensure the rollback fails
    }
  },
};
