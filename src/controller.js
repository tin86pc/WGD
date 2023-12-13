import database from "./database.js"


const trangChu = (req, res) => {
    return res.render('trang_chu.ejs')
}


const xuLyDangNhap = async (req, res, next) => {
    console.log('Xử lý đăng nhập');

    // lấy thông tin từ form đăng nhập gửi lên
    const lienhe = req.body.lienhe;
    const pass = req.body.pass

    // kiểm tra với dữ liêu trong db
    // mật khẩu đúng sẽ trả về user
    let kq = await database.kiemTraUser(lienhe, pass);

    console.log('đăng nhập ' + kq);


    // đăng nhập thành công
    if (kq) {
        // lấy role trong cơ sở dữ liệu
        // req.role = '1';
        // const role = 1;
        next();
    }


    // đăng nhập không thành công
    return res.render('dang_nhap.ejs')
}


const admin = async (req, res) => {
    let usersList = await database.getListUser();




    // console.log(usersList);
    return res.render('admin.ejs', { usersList })
}

const duan = async (req, res) => {
    let duAnList = await database.getListUser();
    // console.log(usersList);
    return res.render('du_an.ejs', { duAnList })
}


const gioiThieu = (req, res) => {
    const data = {
        name: "ABC"
    }
    return res.render('gioi_thieu.ejs', data)
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
    return res.render('dang_ky.ejs')
}


const dangNhap = (req, res, next) => {
    return res.render('dang_nhap.ejs')
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
