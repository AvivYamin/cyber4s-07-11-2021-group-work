import * as GV from '../global-variables';
import { createElement } from '../general-functions';
import { deleteContact } from '../delete/delete-contact';
export async function getPhonebook(){ 
    try {
        const response = await axios.get(`${GV.baseUrl}/api/persons`);
        const data = response.data;
        console.log(data);
        const phoneBookList = createElement("ul");
        data.forEach(contact => {
            const deleteBtn = createElement("button", ["X"], ["delete-button"]);
            deleteBtn.addEventListener("click", deleteContact);
            let contactEl = createElement("li", [`${contact.name} - ${contact.number}   `, deleteBtn]);
            phoneBookList.appendChild(contactEl);
        });
        GV.phoneBookResult.appendChild(phoneBookList);
    } catch (error) {
        console.error(error);
    }   
};