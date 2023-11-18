import express from 'express';
import homeController from '../controller/C1 home.js'
import userController from '../controller/C2 user.js'
import aboutController from '../controller/C3 about.js'
import notFoundController from '../controller/C4 notFound.js'

const router = express.Router();


const initWebRoutes = (app) => {
    router.get('/', homeController)

    router.get('/user', userController)

    router.get('/about', aboutController)

    router.get('/*', notFoundController)

    return app.use('/', router);
}

export default initWebRoutes;