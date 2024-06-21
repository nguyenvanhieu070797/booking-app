const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const multer = require('multer');

// Models
const User = require('./models/user');
const Department = require('./models/department');
const UserDepartment = require('./models/user-department');
const Device = require('./models/device');
const DeviceImport = require('./models/device-import');
const DeviceCount = require('./models/device-count');
const Category = require('./models/category');
const CategoryDevice = require('./models/category-device');

// Route
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const ocrRoutes = require('./routes/ocr');
const isAuth = require("./middleware/is-auth");

const uuid = require('uuid');

require('dotenv').config();

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = req?.originalUrl || "";
        let pathFile = "";

        if (path.includes("/admin/user")) {
            pathFile = "users";
        } else if (path.includes("/admin/department")) {
            pathFile = "departments";
        } else if (path.includes("/admin/device")) {
            pathFile = "devices";
        } else if (path.includes("/ocr/upload")) {
            pathFile = "ocr";
        }

        cb(null, pathFile !== "" ? `images/${pathFile}` : 'images');
    },
    filename: (req, file, cb) => {
        let extension = "";
        switch (file.mimetype.toLowerCase()) {
            case "image/png":
                extension = "png";
                break;
            case "image/jpg":
                extension = "jpg";
                break;
            case "image/jpeg":
                extension = "jpeg";
                break;
            default:
                extension = "png";
        }
        cb(null,  `${uuid.v4()}.${extension}` );
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


app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/ocr', ocrRoutes);
app.use('/images', isAuth, express.static(path.join(__dirname, 'images')));

app.use(errorController.get404);

// User <-> Department => User Department
User.belongsToMany(Department, {
    through: UserDepartment,
    foreignKey: 'user_id',
    foreignKeyConstraint:true,
    unique: false,
});
Department.belongsToMany(User, {
    through: UserDepartment,
    foreignKey: 'department_id',
    foreignKeyConstraint:true,
    unique: false,
});

// Category <-> CategoryDevice => Device
Category.hasMany(Device, {
    foreignKey: 'category_id',
    foreignKeyConstraint:true
});
CategoryDevice.hasMany(Device, {
    foreignKey: 'category_device_id',
    foreignKeyConstraint:true
});

// Device <-> User Department => Device Count
Device.hasMany(DeviceCount, {
    foreignKey: 'device_id',
    foreignKeyConstraint:true
});
UserDepartment.hasMany(DeviceCount, {
    foreignKey: 'user_department_id',
    foreignKeyConstraint:true
});

// Device <-> Device Inport
Device.hasMany(DeviceImport, {
    foreignKey: 'device_id',
    foreignKeyConstraint:true
})

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000);
  }).catch(err => {
    console.log(err);
  });
