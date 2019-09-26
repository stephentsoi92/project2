use exampledb;


create table if not exists Positions
(
	PositionId int primary key auto_increment not null,
    PositionName varchar(100) not null
);

create table if not exists Employees
(
	EmployeeId int primary key auto_increment not null,
    FirstName varchar(100) not null,
    LastName varchar(100) not null,
	PhoneNumber varchar(25),
    Email varchar(255),
    PositionId int,
    Supervisor bool not null,
    constraint  fk_employees_position
	foreign key(PositionId)
		references Positions(PositionId)
);

create table if not exists Shifts
(
	ShiftId int primary key auto_increment not null,
	ShiftTime datetime not null,
	EmployeeId int,
    constraint fk_shifts_employee
    foreign key(EmployeeId)
		references Employees(EmployeeId)
);

create table if not exists Tasks
(
	TaskId int primary key auto_increment not null,
	TaskName varchar(50),
    Comments text,
    Complete bool,
    ShiftId int,
    constraint fk_tasks_shift
    foreign key(ShiftId)
		references Shifts(ShiftId)
);



