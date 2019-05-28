const express = require('express');

class Server {
  constructor({ config, logger }) {
    // constructor({ config, router, logger }) {
    this.config = config;
    this.logger = logger({ config });
    this.express = express();

    this.express.disable('x-powered-by');
    // this.express.use(router);
  }

  start() {
    return new Promise((resolve) => {
      const http = this.express
        .listen(this.config.web.port, () => {
          const { port } = http.address();
          this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
          resolve();
        });
    });
  }
}

module.exports = Server;