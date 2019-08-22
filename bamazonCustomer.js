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
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadProducts();
});

function loadProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, response) {
    if (err) throw err;

    // Draw the table in the terminal using the response
    console.table(response);

    // Then prompt will ask customer which product he/she would like to buy
    //promptCustomerForItem(response);
  });
}
