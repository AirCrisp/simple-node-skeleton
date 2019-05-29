const Bottle = require('bottlejs');
const Server = require('./interfaces/http/Server');
const router = require('./interfaces/http/router');
const logger = require('./infra/logging/logger');
const swaggerMiddleware = require('./interfaces/http/swagger/swaggerMiddleware');
const Application = require('./app/Application');
const config = require('../config');



function appManager() {
    const bottle = new Bottle();
    bottle.factory('config', () => config);
    bottle.factory('logger', (container) => {
        const config = container.config;
        return logger({ config });
    });
    bottle.factory('router', () => router({ swaggerMiddleware}));
    bottle.factory('server', (container) => {
        const config = container.config;
        const logger = container.logger;
        const router = container.router;

        return new Server({config, router, logger});
    });
    
    bottle.factory('app', (container) => {
        const logger = container.logger;
        const server = container.server;

        return new Application({ server, logger });
    });

    return bottle.container;
};

module.exports = appManager;