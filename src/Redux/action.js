import { ADDNUM, CHANGE_USER, DECSUM } from "./actionTypes";



export function addnum (){

    return {
        type:ADDNUM, 
    

    }
}
export function subnum (){
    return {
        type:DECSUM,

    }
}

export function changeName(val){
    return {
        type:CHANGE_USER,
        payload:val
    }
}