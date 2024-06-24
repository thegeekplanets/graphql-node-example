const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB
});

async function syncDatabase() {
  try {
    await db.authenticate();
    await db.sync();
    console.error("Connected to Database");
  } catch (error) {
    console.error("Error Connecting to Database", error);
  }
}

syncDatabase();

module.exports = db;
