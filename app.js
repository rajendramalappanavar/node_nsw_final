// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;


const express = require('express');
const app = express();
const AWS= require("aws-sdk");

app.get('/',(req, res)=>{
    const e = process.env.ACCOUNTID
res.send(e)
})

app.get('/checkfile',async(req, res)=>{
    console.log("coming")
AWS.config.update({
        accessKeyId: "",
        secretAccessKey: "",
        region: ""
    });
const s3 = new AWS.S3();

const params = {
        Bucket: "testvajra",
        Key: "middle_banner.png" //if any sub folder-> path/of/the/folder.ext
}
try {
        await s3.headObject(params).promise()
        res.send({
            Message : "File Found in S3"
        })
    } catch (err) {
        res.send({
            Message : "File Not Found"
        })
}
})



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log("hi")
})
