const appManager = require('./src/container');
const container = appManager();
const app = container.server;

app
  .start()
  .catch((error) => {
    app.logger.error(error);
    process.exit();
  });
