
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

Insert INTO item(description,image_url) VALUES("test image","http://www.gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg");
Insert INTO item(description,image_url) VALUES("test image","http://www.gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg");
Insert INTO item(description,image_url) VALUES("test image","http://www.gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg");