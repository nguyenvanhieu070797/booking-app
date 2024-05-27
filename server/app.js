const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

// Models
const User = require('./models/user');
const Department = require('./models/department');
const UserDepartment = require('./models/user-department');
const Device = require('./models/device');
const DeviceImport = require('./models/device-import');
const DeviceCount = require('./models/device-count');
const Category = require('./models/category');
const CategoryDevice = require('./models/category-device');

const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
// app.use(shopRoutes);

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
