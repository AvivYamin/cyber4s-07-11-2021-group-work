//<---------------- Pop Up Login Form ------------------->
import { mainHead } from '../global-variables';
import * as LV from './login-variables';

LV.submitLogin.addEventListener("click", handleLogin);

//Login function
function setUpLogin(userName){
    if(userName){
        createUserLink(userName); //Changes the main head to include username indication link
        if(userName){
            LV.openButton.style.display = "none"; //Once the username is set - login button disappears
            LV.logoutBtn.style.display = "block" //Logout button appears
        }
    }else{
        LV.openButton.style.display = "block"; //In first initialization username is null - so display login option
        LV.logoutBtn.style.display = "none" //Logout button disappears
    }
}

function handleLogin(e){
    e.preventDefault();
    if(LV.loginInput.value === ""){ //Validates the username input
        alert("Invalid Username")
    }else{
        const userName = LV.loginInput.value; //Assigns the userName with the new input
        userLogin(userName);
        closeForm();
    }
}

function userLogin(userName){
    localStorage.setItem("username", userName); //Saves user value to local storage
    LV.openButton.style.display = "none"; //Login button disappears
    LV.logoutBtn.style.display = "block" //Logout button appears
    createUserLink(userName); //Changes the main head
    location.reload(); //Refresh the DOM
}

function createUserLink(userName){
    const userLinkElement = document.createElement("button");
    userLinkElement.id = "account";
    userLinkElement.textContent = userName;
    // userLinkElement.addEventListener("click", getUserStatistics);
    mainHead.innerText += " - ";
    userLinkElement.textContent = userName;
    mainHead.append(userLinkElement);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function logOut(){
    localStorage.clear();
    setUpLogin(); //Sets the login option
    location.reload(); //Refresh the DOM
}

export{setUpLogin, handleLogin, userLogin, createUserLink, openForm, closeForm, logOut};