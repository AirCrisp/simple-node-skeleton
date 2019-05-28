const Bottle = require('bottlejs');
const Server = require('./interfaces/http/Server');
const router = require('./interfaces/http/router');
const logger = require('./infra/logging/logger');
const config = require('../config');

function appManager() {
    const bottle = new Bottle();
    bottle.factory('Server', () => new Server({ config, router, logger }));
    return bottle.container;
};

module.exports = appManager;