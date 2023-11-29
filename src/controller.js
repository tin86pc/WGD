import database from "./database.js"


const trangChu = (req, res) => {
    return res.render('trangChu.ejs')
}


const xuLyDangNhap = async (req, res) => {
    console.log('Xử lý đăng nhập');
    const lienhe = req.body.lienhe;
    const pass = req.body.pass

    // mật khẩu đúng sẽ trả về user
    let kq = await database.kiemTraUser(lienhe, pass);

    console.log('đăng nhập ' + kq);





    return res.render('dangnhap.ejs')
}


const admin = async (req, res) => {
    let usersList = await database.getListUser();
    // console.log(usersList);
    return res.render('admin.ejs', { usersList })
}


const gioiThieu = (req, res) => {
    const data = {
        name: "ABC"
    }
    return res.render('gioiThieu.ejs', data)
}

// nhận dữ liệu từ form gửi lên
const addUser = async (req, res) => {

    const lienhe = req.body.lienhe
    const pass = req.body.pass

    console.log(lienhe, pass);
    console.log('addUser liên hệ + pass');

    // kiểm tra liên hệ đã tồn tại chưa
    const tt = await database.kiemTraUserTonTai(lienhe)

    if (tt === false) {
        return res.redirect('/dang_nhap')
    }

    // Nếu chưa tồn tại thì thêm vào cơ sở dữ liệu   
    database.addUser(lienhe, pass);



    return res.redirect('/dang_ky')
}

// nhận dữ liệu từ form gửi lên
const capNhat = async (req, res) => {
    const id = req.params.id
    const nhiemVu = req.body.nhiemvu
    // console.log(id, nhiemVu);

    const tt = await database.capNhat(id, nhiemVu)

    return res.redirect('/admin')
}


const luuUser = (req, res) => {
    database.suaUser(req.params.id)
    return res.redirect('/admin')
}


const xoaUser = (req, res) => {
    database.xoaUser(req.params.id)
    return res.redirect('/admin')
}


const dangKy = (req, res) => {
    return res.render('dangky.ejs')
}


const dangNhap = (req, res, next) => {
    return res.render('dangnhap.ejs')
}














export default {
    trangChu,

    gioiThieu,
    dangKy,

    dangNhap,
    xuLyDangNhap,

    admin,
    addUser,
    luuUser,
    xoaUser,
    capNhat
}
