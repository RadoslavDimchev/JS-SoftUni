const express = require('express');
const expressConfig = require('./confing/express');
const databaseConfig = require('./confing/database');
const routesConfig = require('./confing/routes');


start();

async function start() {
  const app = express();
  const PORT = 3000;

  expressConfig(app);
  await databaseConfig(app);
  routesConfig(app);

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}