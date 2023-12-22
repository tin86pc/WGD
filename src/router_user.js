// routes/index.js and users.js
import express from 'express';
import controller from './controller.js'
const router = express.Router();
import mdw from './mdw.js'


router.get('/', controller.trangChu)
router.get('/dang_nhap', controller.dangNhap)
router.get('/dang_ky', controller.dangKy)
router.get('/dang_xuat', mdw.xoaCookie, (req, res, next) => {
    return res.redirect('/')
})
router.post('/add_user', controller.addUser)


// chuyển hướng sang trang adm, ql khi đăng nhập song
router.post('/xu_ly_dang_nhap', mdw.ktMatKhau, mdw.ghiCookie, (req, res, next) => {

    if (req.user == undefined) {
        return res.redirect('/dang_nhap')
    }

    if (req.user.nhiemVu == 'adm') {
        return res.redirect('/adm')
    }

    if (req.user.nhiemVu == 'ql') {
        return res.redirect('/ql')
    }

    res.json('Chưa được phân quyền')

})


export default router;