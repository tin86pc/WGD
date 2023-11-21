import bcrypt from 'bcryptjs'
import mysql from 'mysql2'

let salt = bcrypt.genSaltSync(10);

const hashPassWord = (pass) => {
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'wgd'
});


const addUser = (email, pass) => {
    let hash = hashPassWord(pass);

    connection.query(
        'INSERT INTO users (email, pass) VALUES (?, ?)', [email, hash],
        function (err, results, fields) {
            if (err) {
                console.log('lỗi >>>');
                console.log(err);
            }
            console.log('kết quả >>>');
            console.log(results); // results contains rows returned by server
        }
    );

}

export default {
    addUser
}
