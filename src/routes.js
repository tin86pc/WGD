import express from 'express';
import controller from './controller.js'


const router = express.Router();


const initWeb = (app) => {

    router.get('/', controller.trangChu)
    router.get('/dang_nhap', controller.dangNhap)
    router.get('/dang_ky', controller.dangKy)
    router.get('/admin', controller.admin)
    router.get('/gioi_thieu', controller.gioiThieu)
    router.post('/login', controller.xuLyDangNhap)


    router.post('/luu/:id', controller.luuUser)
    router.get('/xoa/:id', controller.xoaUser)
    router.post('/add_user', controller.addUser)







    router.get('/*', controller.notFound)

    return app.use('/', router);
}

export default {
    initWeb,
}
