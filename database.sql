CREATE DATABASE ticketSystem;

CREATE TABLE tickets(
    todo_id SERIAL PRIMARY KEY,
    tickettitle VARCHAR(255),
    section VARCHAR(255),
    roll VARCHAR(255),
    seat VARCHAR(255),
    imgname VARCHAR(255),
    showdate VARCHAR(255),
    venue VARCHAR(255),
    tourtitle VARCHAR(255)
);
   