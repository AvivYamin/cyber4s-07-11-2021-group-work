const express = require("express");
const Router = express.Router();

const phoneBook = [
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

Router.get('', (req, res) => {
    try {
        res.send(phoneBook);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = {
    Router,
    phoneBook
 };