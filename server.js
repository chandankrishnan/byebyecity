/**
 * @define dependencies
 */
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3005;

/**
 * configure modules
 */
app.use(express.static('view'));
app.use('/convert', require('./controller/index.js'));

/**
 * server listen on following port
 */
app.listen(port, function () {
    console.log("server runnig on port  " + port);
});
