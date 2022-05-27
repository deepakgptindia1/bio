//IMPORTING TYPES:
import {REQUEST_USER_DATA,CHANGE_USER_DATA} from './../Action/type';

//INITIAL STATES:
const initState={
    name:"",
    age:"",
    height:"",
    gender:"",
    mobileNumber:"",
}

//REDUCER:
const reducer=(state=initState, action)=>{
    switch(action.type){
        case REQUEST_USER_DATA:
            return state;
        case CHANGE_USER_DATA:
            return { ...state , ...action.payload }
        default:
            return state;
    }
}
export default reducer;