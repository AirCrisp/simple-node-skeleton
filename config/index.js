require('dotenv').config();

const _ = require('lodash');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

const envConfig = require(path.join(__dirname, 'environments', ENV));
const dbConfig = loadDbConfig();

const config = Object.assign({
  [ENV]: true,
  env: ENV,
  db: dbConfig
}, envConfig);

module.exports = config;

function loadDbConfig() {
  const dbJSON = require('./database.json')[ENV];
  const dbConfig = {};
  Object.keys(dbJSON).forEach((key) => {
    if (_.isString(dbJSON[key])) dbConfig[key] = dbJSON[key];
    else dbConfig[key] = process.env[dbJSON[key].ENV];
  });
  return dbConfig;
}
