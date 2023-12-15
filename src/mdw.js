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


    res.cookie(process.env.ten_cookie, value, { signed: true })
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

    req.nhiemVu = valueCookies.nhiemVu;
    req.lienHe = valueCookies.lienHe;

    next()
}


const ktQuyenQl = (req, res, next) => {
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
    ktCookie,
    ghiCookie

}