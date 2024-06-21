const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = req?.originalUrl || "";
        let pathFile = "";
        switch (path) {
            case "/admin/user/create":
                pathFile = "users";
                break;
            case "/admin/ocr/upload":
                pathFile = "ocr";
                break;
        }
        cb(null, pathFile !== "" ? `images/${pathFile}` : 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getDate() + '-' + file.originalname );
    }
});


const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};



module.exports.fileStorage = fileStorage;
module.exports.fileFilter = fileFilter;