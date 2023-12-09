// node fsjson

import fs from 'fs/promises';
const path = './data.json';

// đọc file

const json = JSON.parse(
    await fs.readFile(
        new URL(path, import.meta.url)
    )
);



const doc = () => {
    return json
}



// ghi file
const ghi = (nd) => {
    nd.ngay = new Date().toISOString();

    fs.writeFile(path, JSON.stringify(nd, null, 2), (err) => {
        if (err) throw err;
    });

    console.log(nd);
}


console.log('đọc');
console.log(doc());


console.log('ghi');
ghi(doc());

export default {
    doc,
    ghi
}

