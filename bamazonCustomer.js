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

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  showProducts();
});

// Function to load the products table from the database and print results to the console
function showProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    // Draw the table in the terminal using the response
    console.table(res);

    // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
    promptCustomerForItem(res);
  });
}

// Prompt the customer for a product ID
function promptCustomerForItem(inventory) {
  // Prompts user for what they would like to purchase
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "Welcome to SHAH GAME STORE, pick the ID of the item you would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      checkIfShouldExit(val.choice);
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory);

      // If there is a product with the id the user chose, prompt the customer for a desired quantity
      if (product) {
        // Pass the chosen product to promptUserOrderQuantity
        promptUserOrderQuantity(product);
      }
      else {
        // Otherwise let them know the item is not in the inventory, re-run showProducts
        console.log("\nThat item is not in the inventory.");
        showProducts();
      }
    });
}

// Prompt the customer for a product quantity
function promptUserOrderQuantity(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many would you like? [Quit with Q]",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      checkIfShouldExit(val.quantity);
      var quantity = parseInt(val.quantity);

      // If there isn't enough of the chosen product and quantity, let the user know and re-run showProducts
      if (quantity > product.stock_quantity) {
        console.log("\nInsufficient quantity!");
        showProducts();
      }
      else {
        // Otherwise run makePurchase, give it the product information and desired quantity to purchase
        makePurchase(product, quantity);
      }
    });
}


function makePurchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      
      console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
      showProducts();
    }
  );
}


function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
    
      return inventory[i];
    }
  }
  // Otherwise return null
  return null;
}


function checkIfShouldExit(choice) {
  if (choice.toLowerCase() === "q") {
   
    console.log("Goodbye!");
    process.exit(0);
  }
}
