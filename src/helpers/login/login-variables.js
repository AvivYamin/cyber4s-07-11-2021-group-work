//login variables
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("close-button");
const logoutBtn = document.getElementById("logout-button");
const submitLogin = document.getElementById("login-button");
const loginInput = document.getElementById("username-input");
let userName = localStorage.getItem("username");

export{openButton, closeButton, logoutBtn, submitLogin, loginInput, userName};