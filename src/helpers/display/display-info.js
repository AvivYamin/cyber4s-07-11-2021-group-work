import * as GV from '../global-variables';
import { createElement } from '../general-functions';

export async function getInfo(){
    try {
        const response = await axios.get(`${GV.baseUrl}/info`);
        const data = response.data;
        console.log(data);
        let infoResult = createElement('div', [data]);
        GV.phoneBookResult.appendChild(infoResult);
    } catch (error) {
        console.error(error);
    }  
}