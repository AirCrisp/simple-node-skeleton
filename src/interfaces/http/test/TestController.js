const { Router } = require('express');

const TestController = {
  get router() {
    const router = Router();

    router.get('/', this.index);

    return router;
  },

  index(req, res, next) {
    res.send('There is test message, so, it\'s working!');
  },
};

module.exports = TestController;
