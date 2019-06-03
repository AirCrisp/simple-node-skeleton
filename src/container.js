const Bottle = require('bottlejs');
const _ = require('lodash');
const Server = require('./interfaces/http/Server');
const router = require('./interfaces/http/router');
const logger = require('./infra/logging/logger');
const swaggerMiddleware = require('./interfaces/http/swagger/swaggerMiddleware');
const config = require('../config');
const pg = require('./infra/database');
const sqls = require('./infra/database/sqls');

const services = require('./app');
const entities = require('./domain');
const repositories = require('./infra/repositories');



module.exports = () => {
    const bottle = new Bottle();
    bottle.factory('config', () => config);
    bottle.factory('database', (container) => {
        const config = container.config.db;
        return pg({ config })
    });
    
    bottle.factory('repositories', (container) => {
        const database = container.database;
        const result = {};
        Object.keys(repositories).forEach((key) => {
            result[_.camelCase(key)] = new repositories[key](database, sqls[_.camelCase(key)])
        });
        return result;
    });
    bottle.factory('entities', () => entities);
    // bottle.factory('validate', container => makeValidator(container));
    bottle.factory('services', (container) => {
        const result = Object.keys(services).reduce((acc, serviceName) => {
            const service = new services[serviceName](container);
            return { ...acc, [serviceName]: service };
        }, {});
        return result;
    });
    bottle.factory('logger', (container) => {
        const config = container.config;
        return logger({ config });
    });
    bottle.factory('router', () => router({ swaggerMiddleware}));
    bottle.factory('app', (container) => {
        const config = container.config;
        const logger = container.logger;
        const router = container.router;
        
        return new Server({config, router, logger});
    });

    return bottle.container;
};
