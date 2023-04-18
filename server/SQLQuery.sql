USE mangaten;

CREATE TABLE category  (
	categoryID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    categoryCode varchar(255),
    category varchar(255)
);

CREATE TABLE country  (
	countryID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    countryCode varchar(255),
    country varchar(255)
);

CREATE TABLE menuCategory  (
	menuCategoryID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    menuCategory varchar(255)
);

CREATE TABLE publisher  (
	publisherID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    publisherName varchar(255)
);

CREATE TABLE author  (
	authorID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    authorCode varchar(255),
	authorFirstName varchar(225),
	authorLastName varchar(225),
	authorName varchar(255),
	authorRegion varchar(225),
);

CREATE TABLE books  (
	bookID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	isbn varchar(225),
	bookTitle varchar (225),
	categoryID int,
    categoryCode varchar(255),
	authorID int,
	bookAuthorCode varchar(225),
	countryID int,
	countryCode varchar(225),
	synopsis varchar(1000),
	publicationDate varchar(225),
	publisher varchar(225)
);

