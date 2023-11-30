const nv = ['adm', 'mod']

const user = (req, res, next) => {
    const { role } = req.body;
    console.log(role);

    if (!role) {
        return res.status(403).json('bạn cần đăng nhập')
    }

    if (!nv.includes(role)) {
        return res.status(401).json('Bạn không có quyền')
    }


    // Cấp quyền cho qua
    next();
}


export default {
    user
}

