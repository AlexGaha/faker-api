const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

class User {
  constructor() {
    this.password = faker.internet.password();
    this.email = faker.internet.email();
    this.phoneNumber = faker.phone.number();
    this.lastName = faker.name.lastName();
    this.firstName = faker.name.firstName();
    this.id = faker.datatype.uuid();
  }
}

class Company {
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street:faker.streetname,
            city:faker.cityname,
            state:faker.cityname,
            zipCode:faker.zipCode,
            country:faker.country
        }
    }
}
app.get("/api/users/new", (req, res) => {
  const newUser = new User();
  res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
  const newCompany = new Company();
  res.json(newCompany);
});

app.get("/api/user/company", (req,res) => {
  const newUser = new User();
  const newCompany = new Company();
  res.json({newUser,newCompany});
});

app.listen(port, () => console.log(`listening on port ${port}`));
