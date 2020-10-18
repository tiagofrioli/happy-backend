import OrphanagesController from './comtrollers/OrphanagesController';

const routes = Router();

import { Router } from 'express';

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);


export default routes;
