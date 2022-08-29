var express = require('express');
var Contactusmodel = require('../Models/Contactus');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ContactUs');
});
router.get('/Help',function(req,res,next){
  res.render('Help')
})

router.post('/sendmsg', function(req,res,next){
  let newmsg = new Contactusmodel({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  newmsg.save(()=>{
    res.redirect('/')
  });

})

module.exports = router;
