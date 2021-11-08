import * as GV from '../global-variables';

export function createContactObject(){
    const contactName = GV.nameInputElement.value;
    const contactNumber = GV.numberInputElement.value;
    if(contactName === ""){
        
    }
    const contactObject = {
        name: contactName,
        number: contactNumber
    };
    return contactObject;
}
