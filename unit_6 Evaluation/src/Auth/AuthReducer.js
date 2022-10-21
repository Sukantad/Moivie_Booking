import { ALERT, SET_AUTH } from "./Action"

let initState={
    token:'',
    sg:true,
}
export const AuthReducer =(state = initState, { type, payload })=>{
    switch (type){
        case SET_AUTH:{
            return{
                token:payload,
            }

        }
        case ALERT:{
            return{
                ...state, sg:!state.sg
            }
        }
        default:{
            return state;
        }
    }
}