const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const { application } = require("express");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


class User {
    constructor() {
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.name.findName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

// Joe Byron test
app.get("/api/joe", (req, res)=> {
    res.json({message:"what do you wanna tell joe byron right now?!?!"})
})

// New user
app.get("/api/users/new", (reg,res) => {
    res.json(new User())
})

// New Company
app.get("/api/companies/new", (reg,res) => {
    res.json(new Company())
})

// New user & company
app.get("/api/user/company", (reg,res) => {
    res.json({user: new User, company :new Company})
})


// This needs to at the bottom
app.listen( port, () => console.log(`Hey James, its me, your server. Im listening on port: ${port}`) );