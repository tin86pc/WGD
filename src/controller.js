import database from "./database.js"


const trangChu = (req, res) => {
    return res.render('trang_chu.ejs')
}



const admin = async (req, res) => {
    let usersList = await database.getListUser();
    let nhiemVu = req.nhiemVu
    let lienHe = req.lienHe

    return res.render('admin.ejs', { usersList, nhiemVu, lienHe })
}

const duAn = async (req, res) => {

    let duAnList = await database.getListUser();
    let nhiemVu = req.nhiemVu
    let lienHe = req.lienHe

    return res.render('du_an.ejs', { duAnList, nhiemVu, lienHe })
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

    console.log("nhiệm vụ", nhiemVu);
    // console.log(id, nhiemVu);

    const tt = await database.capNhat(id, nhiemVu)

    return res.redirect('/adm')
}


const luuUser = (req, res) => {
    database.suaUser(req.params.id)
    return res.redirect('/adm')
}


const xoaUser = (req, res) => {
    database.xoaUser(req.params.id)
    return res.redirect('/adm')
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
    admin,
    addUser,
    luuUser,
    xoaUser,
    capNhat,
    duAn
}
