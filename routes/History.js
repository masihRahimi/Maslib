const { response } = require('express');
var express = require('express');
const { rawListeners } = require('../Models/books');
var router = express.Router();
var booksmodel = require('../Models/books')
/* GET home page. */
router.get('/', function(req, res, next) {

  booksmodel.find(function(err,response){
    res.render('History', {books:response});
  });

});


router.post('/addbook', function(req,res,next){
  let newbook = new booksmodel({
    author: req.body.author,
    year: req.body.year,
    story: req.body.story
  });
  newbook.save(()=>{
    res.redirect('/History')
  });

});

router.get('/delete/:id',function(req,res,next){
      booksmodel.findOneAndDelete({_id:req.params.id} , ()=>{
        res.redirect('/History')
      });
});




module.exports = router;
                         