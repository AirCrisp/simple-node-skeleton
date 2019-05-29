const { Router } = require('express');
const bodyParser = require('body-parser');
const controller = require('./utils/createControllerRoutes');


module.exports = ({ swaggerMiddleware }) => {
    const router = Router();
    
    router.use(bodyParser.json()).use('/docs', swaggerMiddleware);
    
    router.use('/test', controller('test/TestController'));

    return router;
};