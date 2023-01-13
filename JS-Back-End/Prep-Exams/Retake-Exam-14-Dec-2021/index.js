const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');


start();

async function start() {
  const app = express();
  const PORT = 3000;

  expressConfig(app);
  await databaseConfig(app);
  routesConfig(app);

  app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
}