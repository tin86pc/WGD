// routes/index.js and users.js
import express from 'express';
const router = express.Router();
import controller from './controller.js'


router.get('/', controller.duAn)


export default router;