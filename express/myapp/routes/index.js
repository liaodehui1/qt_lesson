var express = require('express');
var router = express.Router();
var fs = require('fs')
var Path = './public/data/'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});

router.get('/edit', function(req, res, next) {
  // if(!req.cookies.user){
  //   res.render('login',{})
  // }
  var type = req.query.type
  if(type){
    var obj = {}
    switch(type){
      case 'it':
        obj = {}
        break;
      default:
        return res.send({
          status:0,
          info:'参数有误'
        })
    }
    fs.readFile(Path+type+'.json',(err,data)=>{
      // console.log(err)
      if(err){
        return res.send({
          status:0,
          info:'fail...'
        })
      }
      var obj = JSON.parse(data.toString())
      return res.render('edit',{
        data:obj
      })
    })
  }
});

module.exports = router;
