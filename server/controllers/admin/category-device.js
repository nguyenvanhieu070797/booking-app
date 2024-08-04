const CategoryDevice = require('../../models/category-device');

exports.getCategoryDevices = (req, res, next) => {
    CategoryDevice.findAll().then(categoryDevices => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categoryDevices}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getCategoryDevice = (req, res, next) => {
    const categoryDeviceId = req.params.category_device_id;
    CategoryDevice.findByPk(categoryDeviceId).then(categoryDevices => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categoryDevices}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddCategoryDevice = (req, res, next) => {
    const categoryDeviceName = req.body.category_device_name;
    const categoryDeviceCode = req.body.category_device_code;
    const description = req.body.description
    CategoryDevice.create({
        category_name: categoryDeviceName,
        category_code: categoryDeviceCode,
        description: description
    }).then((category ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: category}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditCategoryDevice = (req, res, next) => {
    const categoryDeviceId = req.params.category_device_id;
    const categoryDeviceName = req.body.category_device_name;
    const categoryDeviceCode = req.body.category_device_code;
    const description = req.body.description
    CategoryDevice.findByPk(categoryDeviceId)
        .then(category => {
            category.category_device_name = categoryDeviceName;
            category.category_device_code = categoryDeviceCode;
            category.description = description;
            return category.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteCategoryDevice = (req, res, next) => {
    const categoryDeviceId = req.body.category_device_id;
    CategoryDevice.findByPk(categoryDeviceId)
        .then(category => {
            return category.destroy();
        })
        .then(result => {
            console.log('DESTROYED CATEGORY');
            res.setHeader('Content-Type', 'application/json');
            res.end().status(200);
        })
        .catch(err => console.log(err));
};
