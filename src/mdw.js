
const ktDangNhap = (req, res, next) => {

    const lienhe = req.body.lienhe;
    const pass = req.body.pass

    console.log(lienhe, pass);

    const role = req.params.role
    if (role == undefined) {
        console.log('chưa đăng nhập');
        return res.redirect('/dang_nhap')
    }
    next();
}

const nv = ['1', '2']

const ktQuyen = (req, res, next) => {

    const role = req.params.role

    if (!nv.includes(role)) {
        return res.status(401).json('Bạn không có quyền')
    }

    next();
}




export default {
    ktQuyen,
    ktDangNhap
}