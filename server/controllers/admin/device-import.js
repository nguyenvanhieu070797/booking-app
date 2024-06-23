const DeviceImport = require('../../models/device-import');

exports.getDeviceImports = (req, res, next) => {
    DeviceImport.findAll().then(deviceImports => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: deviceImports}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getDeviceImport = (req, res, next) => {
    const deviceImportId = req.params.device_import_id;
    DeviceImport.findByPk(deviceImportId).then(deviceImports => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: deviceImports}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddDeviceImport = (req, res, next) => {
    const deviceImportName = req.body.device_import_name;
    const deviceImportCode = req.body.device_import_code;
    const description = req.body.description
    DeviceImport.create({
        deviceImport_name: deviceImportName,
        password: deviceImportCode,
        description: description
    }).then((deviceImport ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: deviceImport}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditDeviceImport = (req, res, next) => {
    const deviceImportId = req.params.device_import_id;
    const deviceImportName = req.body.device_import_name;
    const deviceImportCode = req.body.device_import_code;
    const description = req.body.description
    DeviceImport.findByPk(deviceImportId)
        .then(deviceImport => {
            deviceImport.device_import_name = deviceImportName;
            deviceImport.device_import_code = deviceImportCode;
            deviceImport.description = description;
            return deviceImport.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteDeviceImport = (req, res, next) => {
    const deviceImportId = req.body.device_import_id;
    DeviceImport.findByPk(deviceImportId)
        .then(deviceImport => {
            return deviceImport.destroy();
        })
        .then(result => {
            console.log('DESTROYED CATEGORY');
            res.setHeader('Content-Type', 'application/json');
            res.end().status(200);
        })
        .catch(err => console.log(err));
};
