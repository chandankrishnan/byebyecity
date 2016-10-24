/**
 * @define dependencies
 */
var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    convert = require('../model/convert.js');

router.get('/get/csv/file', function (req, res) {
    console.log('inside get')
    fs.readdir('./File', (err, files) => {
        console.log(files)
        for (var i = 0; i < files.length; i++) {
            var file = './File/' + files[i];
            console.log("Start: " + file);
            fs.stat(file, function (err, stats) {
                console.log(file);
                console.log(stats["size"]);
            });
        }
    })

})
/**
 * it convert into json when we pass .csv file contain URL
 * @param      {String} --q(url)
 * @return      {JSON}--return json format data 
 */
router.get("/csv/to/json", function (req, res) {
    var url = req.query.q;
    var isCSV = url.substr(url.length - 3, url.length);
    if (isCSV == "csv") {
        convert.convertToJSON(url, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    } else {
        res.send("You have passed wrong url")
    }
})

module.exports = router;

