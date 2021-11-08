const express  = require('express');
const cors = require('cors');
const path = require('path');
const { response } = require('express');
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: '*'
}));
const port = process.env.PORT || 3000;

//Routers
// const phoneBookImport = require("./routers/get-phonebook-router");
// const getPhonbookInfoRouter = require("./routers/get-phonebook-info-router");

// app.use("/api/persons",phoneBookImport.Router);
// app.use("/info", getPhonbookInfoRouter);

let phoneBook = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

//3.1
app.get('/api/persons', (req, res) => {
    try {
        res.send(phoneBook);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

//3.2
app.get('/info', (req, res) => {
    try {
        const requestDate = new Date(Date.now()).toString();
        // res.send(phoneBook.length, requestDate);
        let response = `Phonebook has info for ${phoneBook.length} people \n ${requestDate}`;
        res.send(response);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

//3.3
function findPersonbyId(phoneBook, id){
    let selectedPerson;
    phoneBook.forEach(person => {
        if(person.id == id){
            selectedPerson = person;
        }
    });
    return selectedPerson;
}

app.get('/api/persons/:id', (req, res) => {
    try {
        const id = req.params.id;
        let person = findPersonbyId(phoneBook, id);
        if(person){
            res.send(person);
        }
        res.status(400).send("Invalid ID");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

//3.4
function findAndDelentPersonbyId(phoneBook, id){
    let i = null;
    phoneBook.forEach(person => {
        if(person.id == id){
            i = id - 1;
        }
    });
    if(i){
        phoneBook.splice(i, 1);    
    }
    return phoneBook;
};

app.delete('/api/persons/:id', (req, res) => {
    try {
        let originLength = phoneBook.length;
        const id = req.params.id;
        phoneBook = findAndDelentPersonbyId(phoneBook, id);
        if(phoneBook.length != originLength){
            res.send(`Item No.${id} was deleted. Phonebook length: ${phoneBook.length}`);
        }
        res.status(400).send("Invalid ID");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

//3.5 + 3.6
function validateRequest(request){
    if(typeof request != 'object'){
        return 1;
    }
    if(!request.hasOwnProperty("name")){
        return 2;
    }else if(findNameInPhonebook(request.name, phoneBook)){
        return 3;
    }
    if(!request.hasOwnProperty("number")){
        return 4;
    }else if(findNumberInPhonebook(request.number, phoneBook)){
        return 5;
    }
}

function findNameInPhonebook(name, phoneBook){
    let flag = false;
    phoneBook.forEach(person => {
        if(person.name === name){
            flag = true;
        }
    });
    return flag;
};

function findNumberInPhonebook(number, phoneBook){
    let flag = false;
    phoneBook.forEach(person => {
        if(person.number === number){
            flag = true;
        }
    });
    return flag;
}

app.post('/api/persons', (req, res) => {
    try {
        let validation = validateRequest(req.body);
         switch (validation) {
             case 1: 
                 validation = "Data type is not object!";
                 break;
             case 2:
                 validation = "There is no name!";
                 break;
             case 3:
                 validation = "The name is taken!";
                 break;
             case 4:
                 validation = "There is no number!";
                 break;
             case 5:
                 validation = "Number is taken!";
                 break;
             default: 
                 validation = true;
                 break;
        }
        if(validation === true){
             let newPersonObject = {
              id: Math.floor(Math.random() * 101),
              name: req.body.name,
              number: req.body.number
            };
            phoneBook.push(newPersonObject);
            console.log(phoneBook);
            res.send("Success!!")
        }
         res.send(`${validation}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})
 
app.listen(port, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(`listening on port ${port}`);
});