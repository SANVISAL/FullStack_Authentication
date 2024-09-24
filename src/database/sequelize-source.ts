
// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('TestSQLServer', 'sa', 'YourPassword123', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433, 
  dialectOptions: { 
    options: {
      encrypt: true, 
      trustServerCertificate: true 
    }
  }
});
