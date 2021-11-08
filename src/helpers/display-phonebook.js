import * as GV from './global-variables';
import { createElement } from './general-functions';

export async function getPhonebook(){ 
    try {
        const response = await axios.get(`${GV.baseUrl}/api/persons`);
        const data = response.data;
        const phoneBookList = createElement("ul");
        data.forEach(contact => {
            let contactEl = createElement("li", [`(${contact.id}) ${contact.name} - ${contact.number}`]);
            phoneBookList.appendChild(contactEl);
        });
        GV.phoneBookResult.appendChild(phoneBookList);
    } catch (error) {
        console.error(error);
    }   
};