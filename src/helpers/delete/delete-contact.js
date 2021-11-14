import { getPhonebook } from '../display/display-phonebook';
import { createElement } from '../general-functions';
import * as GV from '../global-variables';

export async function deleteContact(e){
    try {
        const name = e.target.previousSibling.textContent.split(" - ")[0]; //Get the name of the wanted contact
        const response = await axios.delete(`${GV.baseUrl}/api/persons/${name}`); //Delete from database
        const data = response.data;
        getPhonebook(); //Display new phonebook
        const message = createElement("div", [data]); 
        GV.responseDiv.appendChild(message); //Display delete message
    } catch (error) {
        console.error(error);
    }
}