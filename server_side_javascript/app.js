var express = require('express');
var app = express();
app.use(express.static('public'))
app.get('/topic/:id', function (req, res) {
  var topics=[
      'Javascript is ...',
      'NodeJs is...',
      'Express is ...'
  ];
  var output = `
  <a href="/topic?id=0">Javascript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br>
  ${topics[req.params.id]}
  `
  res.send(output);
});
app.get('/topic/:id/:mode',function (req,res) {
res.send(req.params.id+'',req.params.mode)
})
app.get('/', function (req, res) {
  res.send('Hello home page');
});
app.get('/dynamic', function (req, res) {
  var lis = ''
  const time = Date();
  for(var i=0;i<5;i++){
    lis = lis + '<li>Coding</li>'
  }
  const output =
      `
<html>
<head></head> 
<body>
Hello, Dynamic!
${lis}
${time}
</body>
</html>
      `
  res.send(output)
})
app.get('/route', function (rea, res) {
  res.send('Hello Router,<img src="public/logo3.png">')
})
app.get('/login', function (req, res) {
  res.send('Login plz');
});
app.listen(3000, function () {
  console.log('Conneted 3000 port!')
});
