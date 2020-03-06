// script to generate csv file
const fs = require('fs');
const faker = require('faker');

// create a stream & write headers for file
const writePhoneBook = fs.createWriteStream('phonebook.csv');
writePhoneBook.write(`id,firstName,lastName,phonenumber,adress\n`, 'utf8');

// generate first, last names, phonenumber, address for csv
const generatePhoneBook = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const phoneNumber = faker.phone.phoneNumber();
      const address = faker.address.streetAddress();
      const data = `${id},${firstName},${lastName},${phoneNumber},${address}\n`;
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

generatePhoneBook(writePhoneBook, 'utf-8', () => {
  writePhoneBook.end();
});

// command to generate db from schema
// psql <database> < file.sql

// absolute path to root
// /Users/ParteekSSandhu/Desktop/HR/Boilerplate_Templates/Postgres_Server
// ~/Desktop/HR/Boilerplate_Templates/Postgres_Server

// command to import csv file into postgres
// \Copy phoneBook(id,firstName,lastName,address) FROM '~/Desktop/HR/Boilerplate_Templates/Postgres_Server
