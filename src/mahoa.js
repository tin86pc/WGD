import bcrypt from 'bcryptjs'

let salt = bcrypt.genSaltSync(10);

const hashPassWord = (pass) => {
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
}

const comparePass = (pass, hash) => {
    bcrypt.compare(pass, hash, function (err, res) {
        return res;
    });
}




export default {
    hashPassWord,
    comparePass
}