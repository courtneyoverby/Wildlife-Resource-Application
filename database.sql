
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
	VALUES ('Wildlife Rescue Center', 'Mon. - Fri. 9AM-5PM, Sat. - Sun. 9AM-3PM', '(636) 394-1880', '1128 New Ballwin Rd, Ballwin, MO 63021', 'Insert your own information and experiences here!'),
    ('Wild Souls Wildlife Rescue and Release', 'Mon. - Fri. 9AM-9PM, Closed Sat. - Sun.', '(800) 495-8403', 'Oak Grove, MO 64075', 'Insert your own information and experiences here!'),
    ('Wildlife Rehabilitation Clinic', 'Mon. - Sun. 8AM-12PM, 6PM-10PM', '(636) 677-3670', '1864 Little Brennan Rd, High Ridge, MO 63049', 'Insert your own information and experiences here!'),
    ('Wild Bird Rehabilitation', 'Mon. - Sun. 7AM-7PM', '(314) 426-6400', '9624 Midland Blvd, St. Louis, MO 63114', 'Insert your own information and experiences here!'),
    ('Watkins Wildlife', 'Mon. - Sun. By Appt. Only', '(573) 866-3436', 'Sedgewickville, Missouri, 63781', 'Insert your own information and experiences here!'),
    ('Lakeside Nature Center', 'Mon. Closed, Tues. - Sun. 9AM-4PM', '(816) 513-8960', '4701 E Gregory Blvd, Kansas City, MO 64132', 'Insert your own information and experiences here!'),
    ('Endangered Wolf Center', 'Mon. 8AM-4PM, Tues. Closed, Wed. - Sun. 8AM-4PM', '(636) 938-5900', '6750 Tyson Valley Rd, Eureka, MO 63025', 'Insert your own information and experiences here!'),
    ('Northeast Kansas Wildlife Rescue', 'Mon. - Sun. 24 hours', '(785) 575-1991', '2930 SE Meadowview Dr, Topeka, KS 66605', 'Insert your own information and experiences here!'),
    ('Operation Wildlife', 'Mon. - Fri. 8:30AM-5PM, Sat. 8:30AM-2PM, Sunday Closed', '(785) 542-3625', '23375 Guthrie Rd, Linwood, KS 66052', 'Insert your own information and experiences here!'),
    ('Eagle Valley Raptor Center', 'None to display', '(316) 393-0710', '927 N 343rd St W, Cheney, KS 67025', 'Insert your own information and experiences here!');
