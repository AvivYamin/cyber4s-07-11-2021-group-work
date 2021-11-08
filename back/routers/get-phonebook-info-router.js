const express = require("express");
const Router = express.Router();
const phoneBookImport = require("./get-phonebook-router");

Router.get('', (req, res) => {
    try {
        let requestDate = new Date(Date.now());
        res.send(phoneBookImport.phoneBook.length, requestDate);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;