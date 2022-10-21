
export const SET_AUTH="SET_AUTH";
export const ALERT='ALERT';
export const setAuth=(data)=>({
    type: SET_AUTH,
    payload:data,
});
export const Alert_T=()=>({
type: ALERT,
})