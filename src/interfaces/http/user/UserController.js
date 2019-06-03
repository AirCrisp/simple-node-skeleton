const { Router } = require('express');
const container = require('src/container')();

const UserController = {
  get router() {
    const router = Router();

    router.get('/', this.index);

    return router;
  },

  async index(req, res, next) {
    // console.log(container);
    const test = await container.services.UserService.test();
    res.send(test);
  },
};

module.exports = UserController;
