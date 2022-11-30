CREATE TABLE Customers (
  customerId INT,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  PRIMARY KEY (customerId)
);

CREATE TABLE CustomerOrders (
  customerOrderId INT,
  customerId INT,
  orderDetails TEXT,
  FOREIGN KEY (customerId) REFERENCES Customers(customerId)
);
