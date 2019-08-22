# Bamazon-Customer

## Problem the app is trying to solve
Bamazon-Customer is like storefront with the MySQL skills. The app will take in orders from customers and deplete stock from the store's inventory.


## Give a high-level overview of how the app is organized
1. Created a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populated this database with 10 different products with mockup data. 

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.an
.env - files to ignore uploading in github

## Instructions on how to run the app

![App Demo](./resource/Giphy1.gif)

## Link to a deployed version of the app

Repository: https://github.com/shahriar998/Bamazon-Customer

## The technologies used in the app
1. Javascript
2. Nodejs
3. Node packages
4. Mysql
5. Inquirer
6. GitHub

## My role in the app development

My role was both developer and a tester in order do trial and run every step of appliction during the build 

#### Licensing

The code in this project is licensed under Shahriar Bin Elias 