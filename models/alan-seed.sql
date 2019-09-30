USE exampledb;

INSERT INTO Positions (PositionName)
VALUES 
("Manager"),
("Customer Service"),
("Supervisor");



INSERT INTO Employees (FirstName, LastName, PhoneNumber, Email, PositionId, Supervisor)
VALUES 
("john", "smith", "7863476547", "john@mail.com", 1, true),
("pedro", "hill", "7863476547", "pedro@mail.com", 2, false),
("joan", "deamico", "7863476547", "joan@mail.com", 3, false),
("mary", "thomas", "7863476547", "mary@mail.com", 2, false);
SELECT * FROM Employees;