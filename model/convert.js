/**
 * @define dependencies request
 */
var request = require('request'),
    Converter = require("csvtojson").Converter;
/**
 * @exports module
 */
module.exports = {
    /**
     * In this function convert csv to JSON
     * @param {String} --url
     * @return {JSON} --callback JSON data or err
     */
    convertToJSON:function (url, callback) {
        request(url,function (err, body, data) {
            var data = body.body;
            if (data != null) {
                var converter = new Converter({});
                converter.fromString(data,function (err, result) {
                    callback(null, JSON.stringify(result))
                });
            } else {
                callback("No data in the file was found. ", null);
            }
        })
    }

}
