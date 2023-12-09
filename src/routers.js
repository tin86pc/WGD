import express from 'express'
import controller from './controller.js'




const router = express.Router();




const admin = router.get('/', controller.admin)


export default {
    admin
}