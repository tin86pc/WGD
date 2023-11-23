import express from 'express';
import controller from './controller.js'


const router = express.Router();


const initWebRoutes = (app) => {

    router.get('/', controller.home)

    router.get('/user', controller.user)

    router.get('/about', controller.about)

    router.get('/dang_ky', controller.dangKy)

    router.get('/dang_nhap', controller.dangNhap)

    router.post('/add_user', controller.addUser)







    router.get('/*', controller.notFound)

    return app.use('/', router);
}

export default {
    initWebRoutes,

}
