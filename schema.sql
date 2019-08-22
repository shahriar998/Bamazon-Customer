DROP DATABASE IF EXISTS bamazon_customer;
CREATE database bamazon_customer;

USE bamazon_customer;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("God of War", "PS4", 32.65, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Horizon:Zero Dawn", "PS4", 28.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Marvel's Spider-Man", "PS4", 23.20, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Halo 2", "Xbox", 35.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Dead Redemption 2", "Xbox", 32.49, 170);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Resident Evil 4", "Xbox", 30.99, 290);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Marvel Ultimate Alliance 3", "Nintendo Switch", 59.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mario", "Nintendo Switch", 59.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dragon Ball FighterZ", "Nintendo Switch", 59.99, 290);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Donkey Kong", "Arcade", 19.99, 190);

SELECT * FROM bamazon-customer;