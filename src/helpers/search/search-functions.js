import * as GV from '../global-variables';
import { createElement } from '../general-functions';
import { checkQueryType } from './check-query';

function createResponseElement(contact){
    let message;
    if(typeof contact === "object"){
        const name = contact.name;
        const number = contact.number;
         message = createElement('p', [`${name} - ${number}`]);
    }else{
         message = createElement('p', [contact]);
    }   
    GV.responseDiv.appendChild(message);
}

export async function getContact(e){ 
    e.preventDefault();
    try {
        const query = GV.searchInput.value;
        if(!Number(query)){
            const response = await axios.get(`${GV.baseUrl}/api/search/?name=${query}`);
            console.log(response.data);
            createResponseElement(response.data);
        }else{
            const response = await axios.get(`${GV.baseUrl}/api/search/?number=${query}`);
            console.log(response.data);
            createResponseElement(response.data);
        }
    } catch (error) {
        console.error(error);
        createResponseElement("Invalid Query");
    }   
};