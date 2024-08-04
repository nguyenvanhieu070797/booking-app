const Device = require('../../models/device');

exports.getDevices = (req, res, next) => {
    Device.findAll().then(categories => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categories}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getDevice = (req, res, next) => {
    const deviceId = req.params.device_id;
    Device.findByPk(deviceId).then(categories => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categories}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddDevice = (req, res, next) => {
    const deviceName = req.body.device_name;
    const image = req.body.image;
    const total = req.body.total;
    const amountRemain = req.body.amount_remain;
    const deviceCode = req.body.device_code;
    const description = req.body.description
    Device.create({
        device_name: deviceName,
        device_code: deviceCode,
        image: image,
        total: total,
        amount_remain: amountRemain,
        description: description
    }).then((device ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: device}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditDevice = (req, res, next) => {
    const deviceId = req.params.device_id;
    const deviceName = req.body.device_name;
    const image = req.body.image;
    const total = req.body.total;
    const amountRemain = req.body.amount_remain;
    const deviceCode = req.body.device_code;
    const description = req.body.description
    Device.findByPk(deviceId)
        .then(device => {
            device.device_name = deviceName;
            device.device_code = deviceCode;
            device.description = description;
            device.image = image;
            device.total = total;
            device.amount_remain = amountRemain;
            return device.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteDevice = (req, res, next) => {
    const deviceId = req.body.device_id;
    Device.findByPk(deviceId)
        .then(device => {
            return device.destroy();
        })
        .then(result => {
            console.log('DESTROYED DEVICE');
            res.setHeader('Content-Type', 'application/json');
            res.end().status(200);
        })
        .catch(err => console.log(err));
};
