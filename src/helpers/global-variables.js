//API variables
// const baseUrl = "http://localhost:3000";
const baseUrl = 'https://frozen-shelf-08348.herokuapp.com';
//General variables
const mainHead = document.getElementById("main-head");
const displayPhonebookBtn = document.getElementById("my-phonebook-button");
const phoneBookResult = document.getElementById("phonebook");
//Form variables
const nameInputElement = document.getElementById("contact-name-input");
const numberInputElement = document.getElementById("contact-number-input");
const submitBtn = document.getElementById("submit-btn");
const responseDiv = document.getElementById("response");
//Search variables
const searchInput = document.getElementById("contact-search-input");
const searchBtn = document.getElementById("search-btn");



export{mainHead, displayPhonebookBtn, phoneBookResult, nameInputElement, numberInputElement, submitBtn, responseDiv, baseUrl, searchInput, searchBtn};
