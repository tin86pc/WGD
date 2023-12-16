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


const kiemTraUserTonTai = async (lienhe) => {
    try {
        const [rows, fields] = await connection.execute(
            `Select * from users WHERE lienHe="${lienhe}"`
        );
        if (rows.length == 0) {
            console.log('kiemTraUserTonTai ' + "người dùng mới");
            return true
        }

        if (rows.length == 1) {
            console.log('kiemTraUserTonTai ' + "người dùng đã tồn tại");
            return false;
        }


    } catch (error) {
        console.log(error);
    }
}





const addUser = async (lienhe, pass) => {
    // mã hóa mật khẩu thành mã hash
    let hash = hashPassWord(pass)
    let nhiemVu = 'user'

    try {
        const [rows, fields] = await connection.execute(
            'INSERT INTO users (lienhe, hash, nhiemVu) VALUES (?, ?, ?)',
            [lienhe, hash, nhiemVu]
        );

    } catch (error) {
        console.log(error);
    }

}


const capNhat = async (id, nhiemVu) => {

    try {
        const [rows, fields] = await connection.execute(
            `UPDATE users SET nhiemVu ="${nhiemVu}" WHERE id=${id}`
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
            `Select * from users WHERE lienHe="${lienhe}"`
        );
        user = rows;
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


const kiemTraPass = async (pass, hash) => {
    try {
        // kiểm tra khớp mật khẩu
        const kq = await bcrypt.compareSync(pass, hash, (err, res) => {
            return res;
        })

        // console.log("kiểm tra user");
        return kq;

    } catch (error) {
        console.log(error);
    }
}





export default {
    addUser,
    suaUser,
    xoaUser,
    getUser,
    capNhat,
    getListUser,
    kiemTraPass,
    kiemTraUserTonTai
}
