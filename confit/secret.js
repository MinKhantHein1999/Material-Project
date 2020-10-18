// const crypto = require('crypto');
// crypto.randomBytes(256).toString('hex');

// module.exports = {
//     secret : crypto
// }
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports =
{
    secret :crypto,
}