const { Router } = require('express');
const bodyParser = require('body-parser');
const controller = require('./utils/createControllerRoutes');

const router = Router();

router.use(bodyParser.json());

router.use('/test', controller('test/TestController'));

module.exports = router;