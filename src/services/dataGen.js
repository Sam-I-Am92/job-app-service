// script to generate csv file
const fs = require('fs');
const faker = require('faker');

// create a stream & write headers for file
const writeCompaniesData = fs.createWriteStream('companiesData.csv');
writeCompaniesData.write(`id,companyName,jobTitle,jobLink\n`, 'utf8');

// generate first, last names, phonenumber, address for csv
const generateCompaniesData = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const companyName = faker.company.companyName(); // company name
      const jobTitle = faker.name.jobTitle(); // job title
      const jobLink = faker.internet.domainName(); // job link
      // const address = faker.address.streetAddress(); // N/A
      const data = `${id},${companyName},${jobTitle},${jobLink}\n`;
      if ( i === 0 ) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    while ( i > 0 && ok);
    if ( i > 0 ) {
      writer.once('drain', write);
    }
  }
  write();
}

generateCompaniesData(writeCompaniesData, 'utf-8', () => {
  writeCompaniesData.end();
});

// command to generate db from schema
// psql <database> < file.sql

// absolute path to root
// /Users/ParteekSSandhu/Desktop/HR/Boilerplate_Templates/Postgres_Server
// ~/Desktop/HR/Boilerplate_Templates/Postgres_Server

// command to import csv file into postgres
// \Copy phoneBook(id,firstName,lastName,address) FROM '~/Desktop/HR/Boilerplate_Templates/Postgres_Server
