
const log = function () {
    const key = Object.keys(this)[0];
    const value = this[key];
    console.log(`${key}:${value}`);
}

let dskjfsdkfjs = 3
// log.call({ dskjfsdkfjs })
log({ dskjfsdkfjs })
