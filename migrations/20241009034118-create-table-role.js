"use strict";

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("role", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, // Auto-sets when record is created
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE, // Sequelize will handle updating this
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null, // Auto-sets on soft delete due to paranoid: true
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("role");
  },
};
