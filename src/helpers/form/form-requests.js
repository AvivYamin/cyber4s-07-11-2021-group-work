import * as GV from '../global-variables';
import {createContactObject} from './create-user-object';
import {createResponseElement} from './create-response-element';

export async function postContact(e){
    e.preventDefault();
    try {
        const contactObject = createContactObject();
        let userName = localStorage.getItem("username");
        let response;
        if(userName){
            console.log("logged in");
            response = await axios.post(`${GV.baseUrl}/api/persons`, contactObject);
        }else{
            console.log("not logged");
            response = await axios.post(`${GV.baseUrl}/api/persons`, contactObject);
        }
        createResponseElement(response.data); 
    } catch (error) {
        alert(error);
    }
}





