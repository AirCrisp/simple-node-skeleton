const { Router } = require('express');
const bodyParser = require('body-parser');
const controller = require('./utils/createControllerRoutes');


module.exports = ({ swaggerMiddleware }) => {
    const router = Router();
    
    router.use(bodyParser.json()).use('/docs', swaggerMiddleware);
    
    router.use('/user', controller('user/UserController'));

    return router;
};