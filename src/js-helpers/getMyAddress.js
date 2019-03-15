const ip = require('ip');

module.exports = {
    ip: process.env.HOST || ip.address(),
    port: process.env.PORT || 8080
}
