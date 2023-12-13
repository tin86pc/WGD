// routes/index.js and users.js
import express from 'express';
import controller from './controller.js'
var router = express.Router();
import mdw from './mdw.js'


router.get('/', controller.trangChu)
router.get('/dang_nhap', controller.dangNhap)
router.get('/dang_ky', controller.dangKy)
router.post('/add_user', controller.addUser)


router.post('/xu_ly_dang_nhap', mdw.ktMatKhau, mdw.ghiCookie, controller.admin)


export default router;