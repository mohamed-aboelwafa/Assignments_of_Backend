const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "retail_store",
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected To MySQL");
    }
});

// ======================================================
// Create Tables
// ======================================================

app.get("/create-tables", (req, res) => {

    const query = `

    CREATE TABLE IF NOT EXISTS Suppliers (
        SupplierID INT PRIMARY KEY AUTO_INCREMENT,
        SupplierName VARCHAR(255),
        ContactNumber VARCHAR(15)
    );

    CREATE TABLE IF NOT EXISTS Products (
        ProductID INT PRIMARY KEY AUTO_INCREMENT,
        ProductName VARCHAR(255) NOT NULL,
        Price DECIMAL(10,2),
        StockQuantity INT,
        SupplierID INT,
        FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
    );

    CREATE TABLE IF NOT EXISTS Sales (
        SaleID INT PRIMARY KEY AUTO_INCREMENT,
        ProductID INT,
        QuantitySold INT,
        SaleDate DATE,
        FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
    );

    `;

    connection.query(query, (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json("Tables Created Successfully");
        }

    });

});

// ======================================================
// Add Supplier
// ======================================================

app.post("/suppliers", (req, res) => {

    const { SupplierName, ContactNumber } = req.body;

    const query = `
    INSERT INTO Suppliers (SupplierName, ContactNumber)
    VALUES (?, ?)
    `;

    connection.execute(
        query,
        [SupplierName, ContactNumber],
        (err, result) => {

            if (err) {
                res.json(err);
            } else {
                res.json("Supplier Added");
            }

        }
    );

});

// ======================================================
// Add Product
// ======================================================

app.post("/products", (req, res) => {

    const {
        ProductName,
        Price,
        StockQuantity,
        SupplierID
    } = req.body;

    const query = `
    INSERT INTO Products
    (ProductName, Price, StockQuantity, SupplierID)
    VALUES (?, ?, ?, ?)
    `;

    connection.execute(
        query,
        [ProductName, Price, StockQuantity, SupplierID],
        (err, result) => {

            if (err) {
                res.json(err);
            } else {
                res.json("Product Added");
            }

        }
    );

});

// ======================================================
// Get All Products
// ======================================================

app.get("/products", (req, res) => {

    const query = `SELECT * FROM Products`;

    connection.query(query, (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });

});

// ======================================================
// Update Product Price
// ======================================================

app.put("/products/:id", (req, res) => {

    const id = req.params.id;
    const { Price } = req.body;

    const query = `
    UPDATE Products
    SET Price = ?
    WHERE ProductID = ?
    `;

    connection.execute(
        query,
        [Price, id],
        (err, result) => {

            if (err) {
                res.json(err);
            } else {
                res.json("Product Updated");
            }

        }
    );

});

// ======================================================
// Delete Product
// ======================================================

app.delete("/products/:id", (req, res) => {

    const id = req.params.id;

    const query = `
    DELETE FROM Products
    WHERE ProductID = ?
    `;

    connection.execute(
        query,
        [id],
        (err, result) => {

            if (err) {
                res.json(err);
            } else {
                res.json("Product Deleted");
            }

        }
    );

});

// ======================================================
// Get Total Quantity Sold
// ======================================================

app.get("/total-sold", (req, res) => {

    const query = `

    SELECT Products.ProductName,
    SUM(Sales.QuantitySold) AS TotalSold
    FROM Sales
    JOIN Products
    ON Sales.ProductID = Products.ProductID
    GROUP BY Products.ProductName

    `;

    connection.query(query, (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });

});

// ======================================================
// Product With Highest Stock
// ======================================================

app.get("/highest-stock", (req, res) => {

    const query = `

    SELECT *
    FROM Products
    ORDER BY StockQuantity DESC
    LIMIT 1

    `;

    connection.query(query, (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });

});

// ======================================================
// Products Never Sold
// ======================================================

app.get("/never-sold", (req, res) => {

    const query = `

    SELECT *
    FROM Products
    WHERE ProductID NOT IN (
        SELECT ProductID FROM Sales
    )

    `;

    connection.query(query, (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });

});

// ======================================================
// Sales Details
// ======================================================

app.get("/sales-details", (req, res) => {

    const query = `

    SELECT Products.ProductName, Sales.SaleDate
    FROM Sales
    JOIN Products
    ON Sales.ProductID = Products.ProductID

    `;

    connection.query(query, (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });

});



app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});