const { response } = require('express');
var express = require('express');
/* const { rawListeners } = require('../Models/books'); */
var router = express.Router();
/* var booksmodel = require('../Models/books') */
/* GET home page. */
router.get('/', function(req, res, next) {

 
    res.render('History');


});

/* booksmodel.find(function(err,response){   , {books:response}

}); */

/* 
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


router.get('/editform/:id', function(req,res,next){
  booksmodel.findOne({_id: req.params.id}, (err,response)=>{
    res.render('editform', {editdata: response})
  })
})

router.post('/edit', function(req,res,next){
  booksmodel.findByIdAndUpdate({_id: req.body.id}, {author: req.body.author, year: req.body.year, story: req.body.story} , ()=>{
    res.redirect('/History')
  })
}) */



module.exports = router;
                         