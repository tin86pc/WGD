import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import controller from './controller.js'

import router from './routers.js'
import mdw from './mdw.js'

const app = express()

// config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('./src/public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');



// router cho khách
app.get('/', controller.trangChu)
app.get('/dang_nhap', controller.dangNhap)
app.get('/dang_ky', controller.dangKy)
app.get('/admin', controller.admin)

app.post('/xu_ly_dang_nhap', controller.xuLyDangNhap)
app.post('/add_user', controller.addUser)

app.post('/luu/:id', controller.luuUser)
app.post('/cap_nhat/:id', controller.capNhat)
app.get('/xoa/:id', controller.xoaUser)


// router cho adm
app.use('/adm/:role', mdw.ktDangNhap, mdw.ktQuyen, router.admin)

// router cho mode











app.get('/*', controller.gioiThieu)






const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
    console.log('http://127.0.0.1:' + PORT);
})
