import * as GV from '../global-variables';
import { createElement } from '../general-functions';
import { searchMycontact } from './filer';

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
        const phonebookResponse = await axios.get(`${GV.baseUrl}/api/persons`);
        const phoneBook = phonebookResponse.data;
        const query = GV.searchInput.value;
        const result = searchMycontact(query, phoneBook);
        if(result >= 0){
            createResponseElement(phoneBook[result]);
        }else{
            result = "Contact Does not exist"
            createResponseElement(result);
        }
    } catch (error) {
        console.error(error);
    }   
};