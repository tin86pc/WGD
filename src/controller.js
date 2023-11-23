import userService from "./database.js"


const home = (req, res) => {
    return res.render('V1 home.ejs')
}


const user = async (req, res) => {
    let usersList = await userService.getListUser();
    return res.render('V2 user.ejs', { usersList })
}




const about = (req, res) => {
    const data = {
        name: "aaaaaaaaaa"
    }
    return res.render('V3 about.ejs', data)
}

// nhận dữ liệu từ form gửi lên
const addUser = async (req, res) => {

    let email = req.body.email
    let pswd = req.body.pswd

    await userService.addUser(email, pswd)

    return res.redirect('/user')
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
