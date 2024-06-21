const express = require('express');
const router = express.Router();
const Tesseract = require("tesseract.js");
const path = require("path");
const isAuth = require("../middleware/is-auth");
const lang = ['vie', 'eng'];

router.get("/get/:image", isAuth, (req, res) => {
    const image = req.params.image;
    return Tesseract
        .recognize(path.join(__dirname, `../images/ocr/${image}`), lang)
        .then((result) => {
            const data = result.data?.text || "";
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                data: data.split("\n")
            }, null, 3)).status(200);
        })
        .catch((error) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: error.message}, null, 3)).status(302);
        })
})

router.post("/upload", isAuth, (req, res) => {
    const file = req.file.filename;
    return Tesseract
        .recognize(path.join(__dirname, `../images/ocr/${file}`), lang).then((result) => {
            const data = result.data?.text || "";
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                data: data.split("\n")
            }, null, 3)).status(200).json();
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })

})

module.exports = router;