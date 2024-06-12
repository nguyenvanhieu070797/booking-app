const Category = require('../../models/category');

exports.getCategories = (req, res, next) => {
    Category.findAll().then(categories => {
        console.log({categories});
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categories}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getCategory = (req, res, next) => {
    const categoryId = req.params.category_id;
    Category.findByPk(categoryId).then(categories => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: categories}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddCategory = (req, res, next) => {
    const categoryName = req.body.category_name;
    const categoryCode = req.body.category_code;
    const description = req.body.description
    Category.create({
        category_name: categoryName,
        password: categoryCode,
        description: description
    }).then((category ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: category}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditCategory = (req, res, next) => {
    const categoryId = req.params.category_id;
    const categoryName = req.body.category_name;
    const categoryCode = req.body.category_code;
    const description = req.body.description
    Category.findByPk(categoryId)
        .then(category => {
            category.category_name = categoryName;
            category.category_code = categoryCode;
            category.description = description;
            return category.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteCategory = (req, res, next) => {
    const categoryId = req.body.category_id;
    Category.findByPk(categoryId)
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
