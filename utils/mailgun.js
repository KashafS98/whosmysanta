const mailgun = require('mailgun.js');

const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

module.exports = mg