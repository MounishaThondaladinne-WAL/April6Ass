var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
//const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var sqProductsRouter = require("./routes/sqproducts");
var sqTodosRouter = require("./routes/sqtodos");
var sqUserRouter = require("./routes/Squsers");
var sqProductsExam = require("./routes/sqProductsexam");
var sqCompany = require("./routes/sqCompay");
var sqEmployee = require("./routes/sqEmployee");
var app = express();
//configure the sesssion.
app.use(
  session({
    secret: "session_secret_key",
    resave: true,
    saveUnitialized: true,
    cookie: {
      secure: false,
    },
  })
);
// This line will make all variables written in .env file in to our aplication
/*require("dotenv").config();
console.log(`The application nmae is ${process.env.appName}`);
mongoose.connect(process.env.mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", function (error) {
  console.log("unable to connect to mongoDB");
  console.log(error);
});
db.on("open", function () {
  console.log("we are connected to mongodb server via mongoose");
});*/
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/sqproducts", sqProductsRouter);
app.use("/sqtodos", sqTodosRouter);
app.use("/squsers", sqUserRouter);
app.use("/products", sqProductsExam);
app.use("/company", sqCompany);
app.use("/employee", sqEmployee);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
