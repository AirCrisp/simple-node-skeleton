const Bottle = require('bottlejs');
const Server = require('./interfaces/http/Server');
const logger = require('./infra/logging/logger');
const config = require('../config');

function appManager() {
    const bottle = new Bottle();
    bottle.factory('Server', () => new Server({ config, logger }));
    return bottle.container;
};

module.exports = appManager;