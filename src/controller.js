import database from "./database.js"


const trangChu = (req, res) => {
    return res.render('trangChu.ejs')
}


const xuLyDangNhap = (req, res) => {
    console.log('Xử lý đăng nhập');
    const email = req.body.email;
    const pass = req.body.pass

    database.getUser('a');

    if (email != undefined && pass != undefined) {
        console.log(email, pass);
    }



}


const admin = async (req, res) => {
    let usersList = await database.getListUser();
    return res.render('admin.ejs', { usersList })
}


const gioiThieu = (req, res) => {
    const data = {
        name: "aaaaaaaaaa"
    }
    return res.render('gioiThieu.ejs', data)
}

// nhận dữ liệu từ form gửi lên
const addUser = (req, res) => {
    console.log(req.body.lienhe, req.body.pass);
    database.addUser(req.body.lienhe, req.body.pass)
    return res.redirect('/dang_ky')
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


const notFound = (req, res) => {
    return res.render('notFound.ejs')
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






    notFound
}
