const Bottle = require('bottlejs');
const Server = require('./interfaces/http/Server');
const router = require('./interfaces/http/router');
const logger = require('./infra/logging/logger');
const swaggerMiddleware = require('./interfaces/http/swagger/swaggerMiddleware');
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
        const router = container.router;
        const logger = container.logger;

        return new Server({config, router, logger});
    });

    return bottle.container;
};

module.exports = appManager;