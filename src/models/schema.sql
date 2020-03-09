DROP DATABASE IF EXISTS jobapps;

DROP TABLE IF EXISTS users, companies, offers;

CREATE DATABASE jobapps;

\c jobapps

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  username TEXT NOT NULL,
  companiesapplied INT NOT NULL
);

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  companyname TEXT NOT NULL,
  jobtitle TEXT NOT NULL,
  joblink TEXT NOT NULL
);

CREATE TABLE offers (
  id SERIAL PRIMARY KEY,
  opportunitytype TEXT NOT NULL,
  initialcomp INT NOT NULL,
  negotiated TEXT NOT NULL,
  finalcomp INT NOT NULL,
  accepted TEXT NOT NULL
);