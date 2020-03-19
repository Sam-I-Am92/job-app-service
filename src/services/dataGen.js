// script to generate csv file
const fs = require('fs');
const faker = require('faker');

// create a stream & write headers for file
const writeCompaniesData = fs.createWriteStream('companiesData.csv');
const writeOffersData = fs.createWriteStream('offersData.csv');
const writeUsersData = fs.createWriteStream('usersData.csv');
writeCompaniesData.write(`id,companyName,jobTitle,jobLink,userId\n`, 'utf8');
writeOffersData.write(`id,opportunityType,initialComp,negotiated,finalComp,accepted,userId\n`, 'utf8');
writeUsersData.write(`id,firstName,lastName,userName,companiesApplied\n`, 'utf8');

// generate first, last names, phonenumber, address for csv
const generateCompaniesData = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const companyName = faker.lorem.word(); // company name
      const jobTitle = faker.name.jobTitle(); // job title
      const jobLink = faker.internet.domainName(); // job link
      const userId = faker.random.number({min: 1, max: 10});
      const data = `${id},${companyName},${jobTitle},${jobLink},${userId}\n`;
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

const generateOffersData = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const oppType = 'Full-Time';
      const initialComp = `${faker.random.number()}`;
      const negotiated = 'Yes';
      const finalComp = `${faker.random.number()}`;
      const accepted = 'Yes';
      const userId = faker.random.number({min: 1, max: 10});
      const data = `${id},${oppType},${initialComp},${negotiated},${finalComp},${accepted},${userId}\n`;
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

const generateUsersData = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const userName = faker.internet.userName();
      const companiesApplied = faker.random.number();
      const data = `${id},${firstName},${lastName},${userName},${companiesApplied}\n`;
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

generateOffersData(writeOffersData, 'utf-8', () => {
  writeOffersData.end();
});

generateUsersData(writeUsersData, 'utf-8', () => {
  writeUsersData.end();
});
