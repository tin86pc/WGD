import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'


import controller from './controller.js'
import mdw from './mdw.js'

const app = express()

// config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser("12345"))
app.use(express.static('./src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');



// router
import router_user from './router_user.js';
app.use('', router_user);

import router_dt from './router_dt.js';
app.use('/dt', mdw.ktQuyen, router_dt);

import router_adm from './router_adm.js';
app.use('/adm', mdw.ktQuyen, router_adm);



// app.get('/getCookie', (req, res) => {
//     let valueCookies = req.signedCookies.ten_cookie
//     console.log(valueCookies);
//     res.json({ valueCookies: valueCookies })
// })




app.get('/*', controller.gioiThieu)
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
    console.log('http://127.0.0.1:' + PORT);
})
