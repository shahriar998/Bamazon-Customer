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

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //   specificArtist();
    //   multipleArtist();
    //showTable();
    start();
    connection.end();


});

function start() {
    inquirer
        .prompt({
            name: "postOrBid",
            type: "list",
            message: "Would you like to [POST] an auction or [BID] on an auction?",
            choices: ["POST", "BID", "EXIT"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.postOrBid === "POST") {
                postAuction();
            }
            else if (answer.postOrBid === "BID") {
                bidAuction();
            } else {
                connection.end();
            }
        });
}
function showTable() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.table(res)
    });
}