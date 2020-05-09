
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "resources" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"hours" VARCHAR (150) NOT NULL,
	"number" VARCHAR (15) NOT NULL,
	"address" VARCHAR (150) NOT NULL,
    "information" VARCHAR (1000)
	);

    INSERT INTO "resources" ("name",  "hours", "number", "address", "information")
	VALUES ('Wildlife Rescue Center', 'Mon. - Fri. 9AM-5PM, Sat. - Sun. 9AM-3PM', '(636) 394-1880', '1128 New Ballwin Rd, Ballwin, MO 63021', "Rescuing, Rehabilitating, Releasing Native Wildlife Since 1979");

