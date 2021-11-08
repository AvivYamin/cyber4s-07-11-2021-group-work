export function searchMycontact(query, phoneBook){
    let indicator = -1;
    for(let i = 0; i < phoneBook.length; i++){
        if(phoneBook[i].name == query || phoneBook[i].id == query || phoneBook[i].number == query){
            indicator = i;
        }
    }
    return indicator;
}