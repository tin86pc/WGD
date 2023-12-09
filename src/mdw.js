
const ktDangNhap = (req, res, next) => {
    console.log('kiểm tra đăng nhập');
    const role = req.params.role

    const role2 = req.body.role;
    console.log('role2');
    console.log(role2);

    if (role == undefined) {
        console.log('chưa đăng nhập');
        return res.redirect('/dang_nhap')
    }
    next();
}

const nv = ['1', '2']

const ktQuyen = (req, res, next) => {

    console.log('Kiểm tra quyền');

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