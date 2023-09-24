import express from 'express';
const router = express.Router();
//import __newController from '../app/controllers/NewsController.js'
import NewsController from '../app/controllers/NewsController.js';
const newsController = new NewsController();

                                    router.use('/:slug', newsController.show);
                                    router.use('/', newsController.index);

export default router;
