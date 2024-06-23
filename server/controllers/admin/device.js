const Device = require('../../models/device');
const {validationResult} = require("express-validator");
const uuid = require('uuid');

exports.getDevices = (req, res) => {
    Device.findAll().then(categories => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categories}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getDevice = (req, res) => {
    const deviceId = req.params.device_id;
    Device.findByPk(deviceId).then(categories => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categories}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddDevice = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.data = errors.array();
        res.end(JSON.stringify({
            message: error.data?.[0]?.["msg"] || "",
        }, null, 3)).status(302);
    } else {
        const deviceName = req.body.device_name;
        const imageUrl = req.file.path;
        const total = req.body.total;
        const amountRemain = req.body.amount_remain;
        const deviceCode = req.body.device_code;
        const description = req.body.description
        Device.create({
            device_id: uuid.v4(),
            device_name: deviceName,
            device_code: deviceCode,
            image: imageUrl,
            total: parseInt(total),
            amount_remain: parseInt(amountRemain),
            description: description
        }).then((device ) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: device, status: 200}, null, 3)).status(200);
        }).catch(err => {
            console.log(err);
        });
    }
};

exports.postEditDevice = (req, res) => {
    const deviceId = req?.params?.device_id || "";
    const deviceName = req?.body?.device_name || "";
    const imageUrl = req?.file?.path || "";
    const total = req?.body?.total;
    const amountRemain = req?.body?.amount_remain;
    const deviceCode = req?.body?.device_code || "";
    const description = req?.body?.description || "";
    Device.findByPk(deviceId)
        .then(device => {
            device.device_name = deviceName;
            device.device_code = deviceCode;
            device.description = description;
            device.image = imageUrl;
            device.total = total;
            device.amount_remain = amountRemain;

            if(deviceName.length > 0) {
                device.device_name = deviceName;
            } else if (deviceCode.length > 0) {
                device.device_code = deviceCode;
            } else if (description.length > 0) {
                device.description = description;
            } else if (imageUrl.length > 0) {
                device.image = imageUrl;
            } else if (total !== undefined) {
                device.total = parseInt(total);
            } else if (amountRemain !== undefined) {
                device.amount_remain = parseInt(amountRemain);
            }

            return device.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result, status: 200}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteDevice = (req, res) => {
    const deviceId = req.body.device_id;
    Device.findByPk(deviceId)
        .then(device => {
            return device.destroy();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({status: 200}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};
