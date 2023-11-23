import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'



let salt = bcrypt.genSaltSync(10);

const hashPassWord = (pass) => {
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
}


const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'wgd'
});


const addUser = async (email, pass) => {
    let hash = hashPassWord(pass);

    try {
        const [rows, fields] = await connection.execute('INSERT INTO users (email, pass) VALUES (?, ?)', [email, hash]);
        //console.log(rows);

    } catch (error) {
        console.log(error);
    }

}

const getListUser = async () => {
    let user = [];
    try {
        const [rows, fields] = await connection.execute('Select * from users');
        // console.log(rows);
        user = rows;
        return user;

    } catch (error) {
        console.log(error);
    }
}





export default {
    addUser,
    getListUser
}
