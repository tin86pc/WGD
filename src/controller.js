import userService from "./database.js"


const home = (req, res) => {
    return res.render('home.ejs')
}


const user = async (req, res) => {
    let usersList = await userService.getListUser();
    return res.render('user.ejs', { usersList })
}




const about = (req, res) => {
    const data = {
        name: "aaaaaaaaaa"
    }
    return res.render('about.ejs', data)
}

// nhận dữ liệu từ form gửi lên
const addUser = async (req, res) => {

    let email = req.body.email
    let pswd = req.body.pswd

    await userService.addUser(email, pswd)

    return res.redirect('/user')
}

const dangKy = (req, res) => {
    return res.render('dangky.ejs')
}

const dangNhap = (req, res) => {
    return res.render('dangnhap.ejs')
}







const notFound = (req, res) => {
    return res.render('notFound.ejs')
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
