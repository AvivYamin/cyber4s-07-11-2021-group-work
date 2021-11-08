import * as GV from '../global-variables';
import { createElement } from '../general-functions';

export function createResponseElement(contact){
    let message;
    if(typeof contact === "object"){
        const name = contact.name;
         message = createElement('p', [`${name} was added to your contacts`]);
    }else{
         message = createElement('p', [contact]);
    }   
    GV.responseDiv.appendChild(message);
}

