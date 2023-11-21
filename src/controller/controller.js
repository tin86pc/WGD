import userService from "../service/userService.js"


const home = (req, res) => {
    return res.render('V1 home.ejs')
}
const user = (req, res) => {
    return res.render('V2 user.ejs')
}
const about = (req, res) => {
    const data = {
        name: "aaaaaaaaaa"
    }
    return res.render('V3 about.ejs', data)
}


const addUser = (req, res) => {

    let email = req.body.email
    let pswd = req.body.pswd

    userService.addUser(email, pswd)
    return res.send('thêm người dùng')
}

const dangKy = (req, res) => {
    return res.render('V5 dangky.ejs')
}

const dangNhap = (req, res) => {
    return res.render('V5 dangnhap.ejs')
}







const notFound = (req, res) => {
    return res.render('V4 notFound.ejs')
}

export default {
    home,
    user,
    about,
    addUser,
    dangKy,
    dangNhap,




    notFound
}
