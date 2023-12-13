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
    const kq = await database.kiemTraPass(pass, hash)

    if (kq == false) {
        console.log("Nhập sai mật khẩu")
        return res.redirect('/dang_nhap')
    }

    next()

}

import cookieParser from "cookie-parser"


const ghiCookie = (req, res, next) => {
    console.log('ghi cookie');
    res.cookie('ten_cookie', 'value', { signed: true })
    res.json({ ok: 1 })
}

// lấy cookies

// let valueCookies = req.signedCookies.ten_cookie
// console.log(valueCookies);







const ktQuyen = (req, res, next) => {
    const role = "2"


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
    ktQuyen,
    ghiCookie
}