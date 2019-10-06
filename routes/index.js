var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'chat' });
});
router.post('/chatroom', function (req, res, next) {
  // res.render('index', { title: 'chat' });
  console.log(req.body.username);
  var temp_user = req.body.username;




  res.render('chatroom', {
    title: 'chat',
    show_user: temp_user
  });


});
module.exports = router;

