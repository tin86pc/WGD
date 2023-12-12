import database from "./database.js"

const ktMatKhau = async (req, res, next) => {
    console.log('kiểm tra mật khẩu');
    const lienhe = req.body.lienhe;
    const pass = req.body.pass;


    console.log(lienhe, pass);

    let kq = await database.kiemTraUser(lienhe, pass);
    console.log(kq);

    if (kq) {
        req.role = '1';
        console.log('kiểm tra mật khẩu ok');
        next();
    }
    else {
        return res.render('dangnhap.ejs')
    }

}

const ktQuyen = (req, res, next) => {

    console.log('Kiểm tra quyền');

    const role = req.role
    console.log(role);

    if (role == '0') {
        console.log('Quyền admin');
        next();
    }
    if (role == '1') {
        console.log('Quyền đối tác');
        next();
    }
    if (role == '2') {
        console.log('Quyền người dùng');
        next();
    }


}




export default {
    ktMatKhau,
    ktQuyen
}