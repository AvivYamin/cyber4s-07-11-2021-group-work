const express  = require('express');
const cors = require('cors');
const path = require('path');
const { response } = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: '*'
}));

const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

//3.13
require('dotenv').config();
const Contact = require('./module/contact');
const url = process.env.MONGODB_URI ;

if(process.argv[4]){
    const contact = new Contact({
        name: process.argv[3],
        number: process.argv[4]
    })
    contact.save().then(result => {
        console.log(`${contact.name} was saved!`)
        mongoose.connection.close()
    })
}

//3.7
// app.use(morgan('tiny'));
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));


//3.1
app.get('/api/persons', (req, res) => {
    try {
        // const phoneBook = getPhoneBookFromDB();
        const contactsArray = [];
        Contact.find({}).then(result => { //Search the database for data
        result.forEach(contact => { //For each contact recieved from database push it to the response array
            contactsArray.push(contact);
        })
        console.log(contactsArray);
        res.send(contactsArray);
    })
    }catch (error) {
        console.log(error);
        res.send(error);
    }
})

//3.2
app.get('/info', (req, res) => {
    try {
        const requestDate = new Date(Date.now()).toString();
        const contactsArray = [];
        Contact.find({}).then(result => { //Search the database for data
            result.forEach(contact => { //For each contact recieved from database push it to the response array
                contactsArray.push(contact);
            })
            console.log(contactsArray);
            let response = `Phonebook has info for ${contactsArray.length} people \n ${requestDate}!!`;
            res.send(response);
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

//3.3
app.get('/api/persons/:id', (req, res) => {
    try {
        const id = req.params.id;
        Contact.findById(id).then(result => { //Search the database for data with that id
            console.log(result);
            if(result){
                res.send(result);
            }else{
                res.status(400).send("Invalid ID");
            }
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

//3.4
app.delete('/api/persons/:id', (req, res) => {
    try {
        const id = req.params.id;
        Contact.findByIdAndDelete(id, (err, docs)=> { //Search the database for data with that id
            if(err){
                console.log(err);
                res.status(400).send("Invalid ID");
            }else{
                console.log(docs)
                console.log(`${id} was deleted`);
                res.send(`${id} was deleted`);
            }
        })
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
    }else{
        if(request.name === ""){
            return 3;
        }
        console.log(findNameInPhonebook(request.name));
        if(findNameInPhonebook(request.name)){
            return 4;
        }
    }

    if(!request.hasOwnProperty("number")){
        return 5;
    }else{
        let number = request.number.split('-').join('');
        if(!Number(number)){
            return 6;
        }
        if(findNumberInPhonebook(request.number)){
            return 7;
        } 
    }
}

function findNameInPhonebook(name){
    let flag = false;
    Contact.find({}).then(result => { //Search the database for data
    result.forEach(contact => { //For each contact recieved from database push it to the response array
        if(contact.name === name){
            flag = true;
        }
    });
    return flag;
    })
};

function findNumberInPhonebook(number){
    let flag = false;
    Contact.find({}).then(result => { //Search the database for data
    result.forEach(contact => { //For each contact recieved from database push it to the response array
        if(contact.number === number){
            flag = true;
        }
    });
    return flag;
    })
}

app.post('/api/persons', (req, res) => {
    try {
        console.log(req.body);
        let validation = validateRequest(req.body);
         switch (validation) {
             case 1: 
                 validation = "Data type is not object!";
                 break;
             case 2:
                 validation = "There is no name!";
                 break;
             case 3:
                validation = "Invalid Name!";
                break;    
             case 4:
                 validation = "The name is taken!";
                 break;
             case 5:
                 validation = "There is no number!";
                 break;
             case 6:
                 validation = "Invalid Number!";
                 break;
             case 7:
                 validation = "Number is taken!";
                 break;
             default: 
                 validation = true;
                 break;
        }
        
        if(validation === true){
             const newContact = new Contact({
                name: req.body.name,
                number: req.body.number
             })
             newContact.save().then(savedContact => {
                res.send(savedContact);
            })
        }else{
            res.send(validation);
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

//Front 
app.use("/", express.static(path.resolve(`./dist`)));

app.get("/", (req, res) => {
 console.log("hey");
  res.sendFile(path.resolve("./dist/index.html"));
});
 
app.listen(port, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(`listening on port ${port}`);
});



