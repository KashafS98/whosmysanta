var express = require('express');
const getEmailTemplate = require('../templates/secretsanta');
const  shuffle = require('../utils');
const mailgun = require('mailgun.js');
var router = express.Router();

var mg = mailgun.client({username: 'api', key: 'key-yourkeyhere'});

/* GET home page. */
router.post('/draw', function(req, res, next) {
    const {friends} = req.body;
    const shuffledFriends = shuffle(friends);
    
    friends.forEach((friend, index) => {
        const santa = shuffledFriends[index];
        const message = getEmailTemplate(santa.name, friend.name);
        mg.messages.create('mg.whosmysanta.in', {
          from: `Santa <santa@whosmysanta.in>`,
          to : friend.email,
          html: message
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    });
    res.send({status : 'ok'});
});

module.exports = router;
