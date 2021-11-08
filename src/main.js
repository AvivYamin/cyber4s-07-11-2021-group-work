import './styles.css'; 
import * as LV from './helpers/login/login-variables';
import * as loginFuncs from './helpers/login/login-functions';
import * as GV from './helpers/global-variables';
import * as formFuncs from './helpers/form/form-requests';

//User login setup
let userName = localStorage.getItem("username");
loginFuncs.setUpLogin(userName);
LV.openButton.addEventListener("click", loginFuncs.openForm);
LV.closeButton.addEventListener("click", loginFuncs.closeForm);
LV.logoutBtn.addEventListener("click", loginFuncs.logOut);

//Form actions
GV.submitBtn.addEventListener('click', formFuncs.postContact)
