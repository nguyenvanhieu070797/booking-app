const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

// Models
const User = require('./models/user');
const Department = require('./models/department');
const UserDepartment = require('./models/user_department');
const Device = require('./models/device');
const DeviceImport = require('./models/device_import');
const DeviceCount = require('./models/device_count');
const Category = require('./models/category');
const CategoryDevice = require('./models/category_device');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
        conosle.log({user});
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// User <-> Department => User Department
User.belongsToMany(Department, { through: UserDepartment });
Department.belongsToMany(User, { through: UserDepartment });
User.hasOne(UserDepartment);
Department.hasOne(UserDepartment);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(3005);
  }).catch(err => {
    console.log(err);
  });
