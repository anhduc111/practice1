const express = require('express')
const mysql = require('mysql2')
const app = express()
const views= require('./src/setting/viewEngine')
const connection= require('./src/setting/database')
const port = 3000

views(app);

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.post('/action', (req, res) => {
  let email1 = req.body.email;
  let name1 = req.body.name;
  let city1 = req.body.city;
  let SignLog = req.body.SignLog;
  if(name1 == ""){
    res.render('demo.ejs', { check:2 })
  }else if(email1 == ""){
    res.render('demo.ejs', { check:3 })
  }else if(city1 == ""){
    res.render('demo.ejs', { check:4 })
  }else{
    connection.connect(function(err) {
      if(SignLog=="1"){
        connection.query(
          'SELECT recharge , monthly FROM user WHERE email=? AND name=? AND city=?', [email1,name1,city1],
          function (err, result, fields) {
            // console.log(JSON.stringify(result)[4]);
            if (result.length == 0) {
              return res.render('demo.ejs', { check:1 })//chưa có tài khoản
            }else{
              var result1=JSON.stringify(result);
              var cc="";
              var monthly1="";
              for(var i=0;i<result1.length;i++){
                if(result1[i]=='e' && result1[i+2]==':' ){ 
                  for(let j=i+3;result1[j]!=',';j++){
                    cc=cc+result1[j];
                  }
                }
                if(result1[i]=='y' && result1[i+2]==':' ){ 
                  for(let j=i+3;result1[j]!='}';j++){
                    monthly1=monthly1+result1[j];
                  }
                }
              }
              res.render('demo.ejs', { check:5, name: name1,email: email1,city: city1,recharge:cc,monthly:monthly1 }) //correctly
            }
          }
        );
      }else{
        connection.query(
          'SELECT * FROM user WHERE email=?', [email1],
          function (err, result, fields) {
            if (result.length == 1) {
              return res.render('demo.ejs', { check:6 }) // đã có tài khoản
            }else{
              connection.query(
                'INSERT INTO user (name, email, city) VALUES (?, ?, ?);', [name1,email1,city1]);
              res.render('demo.ejs', { check:5, name: name1,email: email1,city: city1,recharge:0,monthly:0 } ) //correctly
            }
          }
        );
      }
    });
  }
})
app.post('/Monthly', (req, res) => {
  var register = req.body.Monthly;
  var account = req.body.account;
  var Recharge = req.body.Recharge;
  var Monthly = req.body.MonthlyInfor;
  var name1 = req.body.name;
  var city1 = req.body.city;
  var total = Number(Recharge)-Number(register)*20000;
  connection.query(
    `UPDATE user
    SET monthly = ?,recharge = ?
    WHERE email=?;`, [register,total,account],
    function (err, result, fields) {}
  );
  res.render('demo.ejs', { check:5, name: name1,email: account,city: city1,recharge: total,monthly:register} )
})
app.post('/Recharge', (req, res) => {
  var account = req.body.account;
  var Recharge1 = req.body.Recharge1;
  var Recharge = req.body.Recharge;
  var Monthly = req.body.MonthlyInfor;
  var name1 = req.body.name;
  var city1 = req.body.city;
  var money = parseInt(Recharge1)+parseInt(Recharge);
  // console.log(typeof money);
  connection.query(
    `UPDATE user
    SET recharge = ?
    WHERE email=?;`, [money,account],
    function (err, result, fields) {}
  );
  res.render('demo.ejs', { check:5, name: name1,email: account,city: city1,recharge: money,monthly:Monthly} )
})
app.get('/', (req, res) => {
  res.render('demo.ejs',{ check:0 } )
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})