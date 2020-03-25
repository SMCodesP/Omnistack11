import express from 'express';

import OngController from './controllers/OngController.js';
import IncidentController from './controllers/IncidentController.js';
import ProfileController from './controllers/ProfileController.js';
import SessionController from './controllers/SessionController.js';

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

export default routes;
