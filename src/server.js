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
app.use(cookieParser(process.env.mk_cookie))
app.use(express.static('./src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');




// router
import router_user from './router_user.js';
app.use('', mdw.docCookie, router_user);

import router_ql from './router_ql.js';
app.use('/ql', mdw.docCookie, mdw.ktCookie, mdw.ktQuyenQl, router_ql);

import router_adm from './router_adm.js';
app.use('/adm', mdw.docCookie, mdw.ktCookie, mdw.ktQuyenAdm, router_adm);



app.get('/*', controller.gioiThieu)
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
    console.log('http://127.0.0.1:' + PORT);
})
