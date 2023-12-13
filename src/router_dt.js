// routes/index.js and users.js
import express from 'express';
var router = express.Router();
import mdw from './mdw.js'

router.get('/', (req, res) => {
    return res.json('dt ...');
})



export default router;