const winston = require('winston');

module.exports = ({ config }) => {
  const loggerConfig = {
    level: config.logging.level,
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: config.logging.file })
    ],
    timestamp: config.logging.timestamp
  };

  return winston.createLogger(loggerConfig);
};
