var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Crick@t123",
  database: "bamazon_customer"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
//   specificArtist();
//   multipleArtist();
  showTable();

  connection.end();


});

function start() {
  inquirer
    .prompt({
      name: "userChoise",
      type: "input",
      message: "What is the ID of the product they would like to buy?(Quit with Q)",
    })
    .then(function(answer) {
      console.log(answer.userChoise);
      var productBuy = parseInt(answer.userChoise);
      console.log(productBuy);
      console.log(res.item_id[0]);

      // for (var i =0; i<res.item.le)
    
      // based on their answer, either call the bid or the post functions
      // if (answer.userChoise === "POST") {
      //   postAuction();
      // }
      // else if(answer.postOrBid === "Q") {
      //   connection.end();
      // } else{
        
      // }
    });
}
function showTable() {
  connection.query("SELECT * FROM products", function(err, res) {
    console.table(res)
    console.log(res);
    start();
  });
}