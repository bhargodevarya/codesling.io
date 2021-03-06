import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import log from './lib/log';
import router from './database/routes';
import './database';

const app = express();
const port = 4990 || process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

app.listen(port, () => log(`rest-server listening on port ${port}`));
