
// In Windows: $env:MY_VAR="8000" ; node index.js
// https://stackoverflow.com/a/43025189/1057052

import * as express from 'express'; 
import * as path from 'path';

const app = express();

const env = process.env.NODE_ENV || 'dev';
let port = env === 'prod' ? 5000 : env === 'staging' ? 3001 : 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function () {
  console.log(`Hackathon XR App listening on port ${port}!`)
});
