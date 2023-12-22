import database from "./database.js"


const ktMatKhau = async (req, res, next) => {
    const lienhe = req.body.lienhe
    const pass = req.body.pass

    let user = await database.getUser(lienhe)

    if (user.length == 0) {
        console.log('Người dùng không tồn tại trong csdl')
        return res.redirect('/dang_nhap')
    }

    // Kiểm tra khớp mật khẩu
    const hash = user[0].hash

    // Thêm vào req để cho vào cookie
    req.user = user[0]

    const kq = await database.kiemTraPass(pass, hash)

    if (kq == false) {
        console.log("Nhập sai mật khẩu")
        return res.redirect('/dang_nhap')
    }

    next()

}



const ghiCookie = (req, res, next) => {

    // Chỉ những trường dữ liệu này mới được đưa vào cookie
    const value = {
        id: req.user.id,
        lienHe: req.user.lienHe,
        nhiemVu: req.user.nhiemVu,
        duAn: req.user.duAn
    }


    const setting = {
        expires: new Date(Date.now() + 7 * 24 * 3600 * 1000),// 1 tuần sẽ yêu cầu đăng nhập lại
        signed: true,// ký bảo mật bằng mật khẩu
        httpOnly: true,
    }


    res.cookie(process.env.ten_cookie, value, setting)
    next()
}


const xoaCookie = (req, res, next) => {

    // Chỉ những trường dữ liệu này mới được đưa vào cookie
    const value = {
    }


    const setting = {
        expires: new Date(Date.now()),
        signed: true,// ký bảo mật bằng mật khẩu
        httpOnly: true,
    }


    res.cookie(process.env.ten_cookie, value, setting)
    next()
}

const docCookie = (req, res, next) => {
    let valueCookies = req.signedCookies[process.env.ten_cookie]

    if (valueCookies == undefined || valueCookies == false) {
        return next()
    }

    req.lienHe = valueCookies.lienHe;
    req.nhiemVu = valueCookies.nhiemVu;


    const data = {
        ten: req.lienHe,
        nhiemVu: req.nhiemVu
    }

    res.locals.data = data

    next()



}


const ktCookie = (req, res, next) => {
    let valueCookies = req.signedCookies[process.env.ten_cookie]
    if (valueCookies == undefined) {
        console.log('Chưa đăng nhập');
        return res.redirect('/dang_nhap')
    }
    if (valueCookies == false) {
        console.log('cookies không đúng');
        return res.redirect('/dang_nhap')
    }


    req.lienHe = valueCookies.lienHe;
    req.nhiemVu = valueCookies.nhiemVu;



    next()
}


const ktQuyenQl = (req, res, next) => {

    const data = {
        ten: req.lienHe,
        nhiemVu: req.nhiemVu
    }

    res.locals.data = data



    if (req.nhiemVu != 'ql') {
        console.log('không có quyền ql');
        return res.redirect('/dang_nhap')
    }

    next();

}

const ktQuyenAdm = (req, res, next) => {





    if (req.nhiemVu != 'adm') {
        console.log('không có quyền adm');
        return res.redirect('/dang_nhap')
    }

    next();
}






export default {
    ktMatKhau,
    ktQuyenAdm,
    ktQuyenQl,
    docCookie,
    ktCookie,
    ghiCookie,
    xoaCookie,

}