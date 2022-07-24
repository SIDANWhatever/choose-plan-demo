require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.LOCAL_USERNAME,
    "password": process.env.LOCAL_PASSWORD,
    "database": process.env.LOCAL_DATABASE,
    "host": process.env.LOCAL_HOST,
    "dialect": process.env.LOCAL_DIALECT
  },
  "test": {
    "username": process.env.LOCAL_USERNAME,
    "password": process.env.LOCAL_PASSWORD,
    "database": process.env.LOCAL_DATABASE,
    "host": process.env.LOCAL_HOST,
    "dialect": process.env.LOCAL_DIALECT
  },
  "production": {
    "username": process.env.PROD_USERNAME,
    "password": process.env.PROD_PASSWORD,
    "database": process.env.PROD_DATABASE,
    "host": process.env.PROD_HOST,
    "dialect": process.env.PROD_DIALECT
  }
};
