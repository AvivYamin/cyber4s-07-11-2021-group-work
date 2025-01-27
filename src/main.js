import './styles.css'; 
import * as LV from './helpers/login/login-variables';
import * as loginFuncs from './helpers/login/login-functions';
import * as GV from './helpers/global-variables';
import * as formFuncs from './helpers/form/form-requests';
import {getPhonebook} from './helpers/display/display-phonebook';
import * as searchFuncs from './helpers/search/search-functions';
import {getInfo} from './helpers/display/display-info';


console.log(`${GV.baseUrl}/api/persons`);

//User login setup
let userName = localStorage.getItem("username");
loginFuncs.setUpLogin(userName);
LV.openButton.addEventListener("click", loginFuncs.openForm);
LV.closeButton.addEventListener("click", loginFuncs.closeForm);
LV.logoutBtn.addEventListener("click", loginFuncs.logOut);

//Display phone book
GV.displayPhonebookBtn.addEventListener("click", getPhonebook);
//Display Info
GV.infoBtn.addEventListener("click", getInfo)
//Form actions
GV.submitBtn.addEventListener('click', formFuncs.postContact);
//Search actions 
GV.searchBtn.addEventListener('click', searchFuncs.getContact);
