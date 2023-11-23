import express from "express";



const viewEngine = (app) => {
    // Đặt vị trí lưu hình ảnh và file css , js
    // lên 1 cấp bằng đấu chấm (tính từ vị trí file hiện tại)
    // và vào thư mục public
    app.use(express.static('./src/public'));


    app.set('view engine', 'ejs');


    // Đặt vị trí lưu các file html
    app.set('views', './src/views');

}

export default {
    viewEngine,

}
