// routes/index.js and users.js
import express from 'express';
import controller from './controller.js'
var router = express.Router();


router.get('/', controller.admin)
router.post('/luu/:id', controller.luuUser)
router.post('/cap_nhat/:id', controller.capNhat)
router.get('/xoa/:id', controller.xoaUser)


export default router;