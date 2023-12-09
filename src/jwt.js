import jwt from "jsonwebtoken"
const matKhau = '123456'


// token = Header . Payload . Signneture


const payLoad = {
    id: "123",
    username: 'abc'
}

const token = jwt.sign(payLoad, matKhau)

console.log('token', token);



// hàm đồng bộ
const payLoad2 = jwt.verify(token, matKhau);

// console.log('payLoad2');
console.log(payLoad2);
// console.log({ payLoad2 });



// // hàm bất đồng bộ
// jwt.verify(token, matKhau, (e, d) => {
//     console.log(d);
// });

