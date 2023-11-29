import express from 'express';
import controller from './controller.js'


const router = express.Router();


const initWeb = (app) => {

    router.get('/', controller.trangChu)
    router.get('/dang_nhap', controller.dangNhap)
    router.get('/dang_ky', controller.dangKy)
    router.get('/admin', controller.admin)

    router.post('/xuLyDangNhap', controller.xuLyDangNhap)
    router.post('/add_user', controller.addUser)
    router.post('/luu/:id', controller.luuUser)
    router.post('/cap_nhat/:id', controller.capNhat)

    router.get('/xoa/:id', controller.xoaUser)




    router.get('/*', controller.gioiThieu)
    return app.use('/', router);
}

export default {
    initWeb,
}
