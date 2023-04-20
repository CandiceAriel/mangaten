USE mangaten;
INSERT INTO category (categoryCode,category)
VALUES 
	('BIO', 'Biography'),
	('CH', 'Children'),
	('GN', 'Graphic Novel'),
	('LN', 'Light Novel'),
	('DS', 'Design')
;

INSERT INTO country(countryCode,country)
VALUES 
	('FR', 'French'),
	('JP', 'Japan'),
	('USA', 'United States of America'),
	('UK', 'United Kingdom')
;

INSERT INTO dbo.author(authorCode,authorFirstName, authorLastName, authorFullName)
VALUES ('MS', 'Shinkai', 'Makoto', 'Makoto Shinkai');

INSERT INTO books(isbn, bookTitle, categoryID, categoryCode, authorID, bookAuthorCode, countryID, countryCode, synopsis, PublicationDate, publisher)
VALUES (
	9786263563926, 
	'Suzume', 
	1, 
	(SELECT categoryCode FROM category c WHERE categoryID = 1),
	1,
	(SELECT authorFullName FROM author WHERE authorID = 1),
	2,
	(SELECT countryCode FROM country WHERE countryID = 2),
	'',

);

ALTER TABLE books
   ADD CONSTRAINT FK_books_countryID FOREIGN KEY (countryID)
      REFERENCES country(countryID)
      ON DELETE CASCADE
      ON UPDATE CASCADE
;

SELECT * FROM country;