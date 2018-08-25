var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET product. */
router.get('/products', function(req, res, next) {
  res.render('productlist', { productList: [
    {name:'TV',price: 25000},
     {name:'Mobile',price: 15000},
      {name:'Laptop',price: 70000},
       {name:'Washing machine',price: 34000},
        {name:'watch',price: 6000},
         {name:'Refrigerator',price: 10000},
  ]});
});




/* GET product. */
router.get('/employees', function(req, res, next) {

  // -------------------------Static data ---------------------

    // res.render('employeeList', { employeeList: [ 
    //   {name : "TV" , price : 2000},
    //   {name : "Watch" , price : 2000}
    // ]});

  //-------------------------  Using mondo DB -----------------
  
  // connect to db
  // get the connection
  var url = "mongodb://localhost:27017/employees";
  var mongoClient = mongodb.MongoClient;

  mongoClient.connect(url,function(err,db){
    var collection = db.collection("emp");

    // Find all records
    // fire the query  |fetch records from the collections from the db
    collection.find({}).toArray(function(err,result){
      if(err){
        console.log("Error :" + err);
      }else if(result.length){
         //res.json(result);
         // Render the reulst by passing the model to the view
        res.render('employeeList', { employeeList:result});
      }else{
        res.send("No Employees Found !");
      }
    })

  })

  
});
module.exports = router;
