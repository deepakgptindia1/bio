//IMPORTING TYPES:
import {REQUEST_USER_DATA,CHANGE_USER_DATA} from './type';

//Action to Change the Data.
export const ChangeData=(data)=>{
    return {
        type: CHANGE_USER_DATA,
        payload:data
     }
}

//Action to fetch the Data.
export const RequestData=()=>{
    return {
        type: REQUEST_USER_DATA,
        payload:{}
     }
}