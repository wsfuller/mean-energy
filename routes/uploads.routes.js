var express = require('express');
var router = express.Router();
var path = require('path');

router.use(function(req, res, next){
  next();
});

router.route('/')
  .get(function(req, res){
    res.json(images);
  })




router.route('/images/:filename')
  .get(function(req,res){
    var fileName = req.params.filename;
    res.sendFile(path.resolve(__dirname + '/../uploads/images/' + fileName));
  })


module.exports = router;
