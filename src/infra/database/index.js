'use strict';

module.exports = ({ config }) => {
    const initOptions = {
    };
    
    const configDB = {
        host: config.host,
        port: 5432,
        database: config.database,
        user: config.username,
        password: config.password
    };
    
    const pgp = require('pg-promise')(initOptions);
    const db = pgp(configDB);

    return db;
};
