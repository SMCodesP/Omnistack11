import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

<<<<<<< HEAD
app.listen(3333, function () {
  console.log('Listening to port:  ' + port);
});
=======
app.listen(3333);
>>>>>>> 59da6a5c6a0a2006e85b87b59db0195c56a466a7
