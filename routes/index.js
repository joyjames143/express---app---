var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/users/cool',(req,res)=>{
  res.send('!!!  you are so coool  !!!')
})
module.exports = router;
