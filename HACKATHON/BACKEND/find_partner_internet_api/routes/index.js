var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var nodemailer = require('nodemailer');



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hackathon"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sqlUSER = "CREATE TABLE IF NOT EXISTS USER ("
                +"id INT AUTO_INCREMENT PRIMARY KEY,"
                +" username VARCHAR(255), password VARCHAR(255)) ";

  var sqlFACULTY = "CREATE TABLE IF NOT EXISTS FACULTY("
                  +"id INT AUTO_INCREMENT PRIMARY KEY,"
                  +"name NVARCHAR(255)"
                  +")";

  var sqlMAJOR = "CREATE TABLE IF NOT EXISTS MAJOR("
                +"id INT AUTO_INCREMENT PRIMARY KEY,"
                +"name NVARCHAR(255),"
                +"faculty_id int,"
                +"CONSTRAINT FK_MAJOR_FACULTY FOREIGN KEY (faculty_id) REFERENCES FACULTY(id) "
                +")";
  var sqlCOURSE = "CREATE TABLE IF NOT EXISTS COURSE("
                  +"id INT AUTO_INCREMENT PRIMARY KEY,"
                  +"name NVARCHAR(255)"
                  +")";
  var sqlPERSONAL_INFORMATION = "CREATE TABLE IF NOT EXISTS PERSONAL_INFORMATION ("
                                +"pi_id int NOT NULL PRIMARY KEY,"
                                      +"CONSTRAINT FK_PersonInfo FOREIGN KEY (pi_id) REFERENCES USER(id), "
                                      +"name NVARCHAR(255), "
                                      +"course_id int,"
                                      +"CONSTRAINT FK_PI_COURSE FOREIGN KEY (course_id) REFERENCES COURSE(id) ,"
                                      +"faculty_id int,"
                                      +"CONSTRAINT FK_PI_FACULTY FOREIGN KEY (faculty_id) REFERENCES FACULTY(id) ,"
                                      +"major_id int,"
                                      +"CONSTRAINT FK_PI_MAJOR FOREIGN KEY (major_id) REFERENCES MAJOR(id)"
                                      +")";
  var sqlPOST = "CREATE TABLE IF NOT EXISTS POST("
                +"id INT AUTO_INCREMENT PRIMARY KEY,"
                +"user_id int,"
                +"CONSTRAINT FK_POST_USER FOREIGN KEY (user_id) REFERENCES USER(id),"
                +"faculty_id int,"
                +"CONSTRAINT FK_POST_FACULTY FOREIGN KEY (faculty_id) REFERENCES FACULTY(id),"
                +"major_id int,"
                +"CONSTRAINT FK_POST_MAJOR FOREIGN KEY (major_id) REFERENCES MAJOR(id),"
                +"title NVARCHAR(255),"
                +"description NVARCHAR(1000),"
                +"content NVARCHAR(1000),"
                +"status boolean,"
                +"date DATETIME,"
                +"view int"
                +")";
  var sqlFAVORITE = "CREATE TABLE IF NOT EXISTS FAVORITE("
                          +"id INT AUTO_INCREMENT PRIMARY KEY,"
                          +"user_id int,"
                          +"CONSTRAINT FK_FAVORITE_USER FOREIGN KEY (user_id) REFERENCES USER(id),"
                          +"post_id int,"
                          +"CONSTRAINT FK_FAVORITE_POST FOREIGN KEY (post_id) REFERENCES POST(id)"
                          +")";
  con.query(sqlUSER, function (err, result) {
    if (err) throw err;
    console.log("Table USER created");
  });
  con.query(sqlFACULTY, function (err, result) {
    if (err) throw err;
    console.log("Table FACULTY created");
  });
  con.query(sqlMAJOR, function (err, result) {
    if (err) throw err;
    console.log("Table MAJOR created");
  });
  con.query(sqlCOURSE, function (err, result) {
    if (err) throw err;
    console.log("Table COURSE created");
  });

  con.query(sqlPERSONAL_INFORMATION, function (err, result) {
    if (err) throw err;
    console.log("Table PERSONAL_INFORMATION created");
  });

  con.query(sqlPOST, function (err, result) {
    if (err) throw err;
    console.log("Table POST created");
  });

  con.query(sqlFAVORITE, function (err, result) {
    if (err) throw err;
    console.log("Table FAVORITE created");
  });
});

// router.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

/* GET home page. */
router.get('/', function(req, res, next) {});

// GET api get user
router.get('/getUser',function(req,res,next){
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    res.send(result.map(x => x.username + " " + x.id));
  });
});

// GET api get post
router.get('/getPost',function(req,res,next){
  con.query("SELECT * FROM post WHERE status = 1", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

router.get('/api/getFaculty',function(req,res,next){
  
  con.query("SELECT * FROM hackathon.faculty", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

router.get('/api/getMajor',function(req,res,next){
  
  con.query("SELECT * FROM hackathon.major", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

router.post('/add',function(req,res,next){
  var title = req.body.title,
  description = req.body.description,
  content = req.body.content;
  var d = new Date;
  
  // var sql = "INSERT INTO post (user_id,faculty_id,major_id,title,description,content,status,date,view) VALUES ?";
  // var values = [1,1,1,title,description,content,1,dformat,0 ];
  var sql = "INSERT INTO `hackathon`.`post` (`user_id`, `faculty_id`, `major_id`, `title`, `description`, `content`, `status`, `date`, `view`) VALUES (1, 1, 1, '+"+title+"', '"+description+"', '"+content+"', 1, '"+d.getFullYear()+"/"+(d.getMonth()+1)+"/"+(d.getDate()+1)+"', 1)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

router.get('/api/editStatusDeactive/:id',function(req,res,next){
  var id = req.params.id;
  var sql = "UPDATE post SET status=0 WHERE id = "+id;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    res.send(result);
  });
});

router.get('/api/editStatusActive/:id',function(req,res,next){
  var id = req.params.id;
  var sql = "UPDATE post SET status=1 WHERE id = "+id;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    res.send(result);
  });
});

router.post('/api/getFilter',function(req,res,next){
  console.log("Hello");
  
  var title = req.body.title,
  faculty = req.body.f;
  if(faculty == 0) faculty = "0 OR 1 = 1";
  major = req.body.m;
  if(major == 0) major = "0 OR 1 = 1";

  console.log(faculty + " : "+major);
  

  var sql = "SELECT * FROM post WHERE status=1 AND title LIKE '%"+title+"%' AND  ( faculty_id="+faculty+" ) AND ( major_id="+major + ")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
router.get('/api/getPost/:id',function(req,res,next){
  var id = req.params.id;
  // console.log("Hello "+ id);
  
  con.query("SELECT * FROM post WHERE status = 1 AND id = "+id, function (err, result, fields) {
    if (err) throw err;
    // console.log(result.data.map((x)=>(x.view)));
    // console.log(result);
    // var sql1 = "UPDATE post SET view = "+result.data.map((x)=>(x.view))+" WHERE id = '"+id+"'";
    //   con.query(sql1, function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " + result.affectedRows);
    //   });
    res.send(result);
  });
});

router.get('/api/getPostUser/:id',function(req,res,next){
  var id = req.params.id;
  console.log("Hello "+ id);
  
  con.query("SELECT * FROM post WHERE user_id = "+id, function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
  });
});

router.post('/edit',function(req,res,next){
  var title = req.body.title,
  description = req.body.description,
  content = req.body.content,
  id = req.body.id;
  // var d = new Date;
  
  // var sql = "INSERT INTO post (user_id,faculty_id,major_id,title,description,content,status,date,view) VALUES ?";
  // var values = [1,1,1,title,description,content,1,dformat,0 ];
  var sql = "UPDATE post SET title = '"+title+"',description = '"+description+"', content = '"+content+"' WHERE id = '"+id+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});


router.post('/send', function(req, res, next) {
  var id = req.body.id,
  user_id = req.body.user_id,
  sdt = req.body.sdt,
  emailFrom = req.body.email,
  content = req.body.content;

  var emailUser = "";
  // console.log("Hello world"+ user_id);
  
  con.query("SELECT * FROM user WHERE id = "+user_id, function (err, result, fields) {
    if (err) throw err;
    // console.log("Hello SQL "+result);
    result.map(x => {
      emailUser = x.username;
        // console.log("Trong map "+x.username);
        var transporter =  nodemailer.createTransport({ // config mail server
          service: 'Gmail',
          auth: {
              user: 'huuhung9822@gmail.com',
              pass: 'bvrksioxtawazajk'
          }
      });
      var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
          from: emailUser,
          to: emailUser,
          subject: 'Finding Partner',
          text: 'You recieved message from ' + req.body.email,
          html: '<p>You have got a new message</b><ul><li>Username: Nguyễn Hữu Tiến</li><li>Email: ' + emailFrom + '</li><li>Phone: ' + sdt + '</li><li>Username:' + content + '</li></ul>'
      }
      transporter.sendMail(mainOptions, function(err, info){
          if (err) {
              console.log("Loi roi " + err);
              res.redirect('/find');
          } else {
              console.log('Message sent: ' +  info.response);
              res.redirect('/find');
          }
      });
    })
  });  
  
});

module.exports = router;
