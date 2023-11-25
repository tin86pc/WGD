import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'

let salt = bcrypt.genSaltSync(10);

const hashPassWord = (pass) => {
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
}



const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: process.env.database
});


const kiemTraUser = async (lienhe, pass) => {
    let user = [];
    try {
        const [rows, fields] = await connection.execute(
            `Select * from users WHERE lienhe="${lienhe}"`
        );
        user = rows;
        let hash = user[0].pass;

        bcrypt.compare(pass, hash, (err, res) => {
            console.log(res);
            return user;
        })




        console.log(hash);



        return user;

    } catch (error) {
        console.log(error);
    }
}



const addUser = async (lienhe, pass) => {

    let hash = hashPassWord(pass)

    try {
        const [rows, fields] = await connection.execute(
            'INSERT INTO users (lienhe, pass) VALUES (?, ?)',
            [lienhe, hash]
        );

    } catch (error) {
        console.log(error);
    }

}

const getListUser = async () => {
    let user = [];
    try {
        const [rows, fields] = await connection.execute(
            'Select * from users'
        );

        user = rows;
        return user;

    } catch (error) {
        console.log(error);
    }
}

const getUser = async (lienhe) => {
    let user = [];
    try {
        const [rows, fields] = await connection.execute(
            `Select * from users WHERE lienhe="${lienhe}"`
        );


        user = rows;
        console.log(user);


        return user;

    } catch (error) {
        console.log(error);
    }
}

const xoaUser = async (id) => {
    try {
        const [rows, fields] = await connection.execute(
            `DELETE FROM users WHERE id=${id}`
        );

    } catch (error) {
        console.log(error);
    }
}

const suaUser = async (id) => {
    try {
        const [rows, fields] = await connection.execute(
            `SELECT FROM users WHERE id=${id}`,
            (err, result) => {
                if (err) throw err;
                data = {

                }

            }
        );

    } catch (error) {
        console.log(error);
    }
}





export default {
    addUser,
    suaUser,
    xoaUser,
    getUser,
    getListUser,
    kiemTraUser
}
