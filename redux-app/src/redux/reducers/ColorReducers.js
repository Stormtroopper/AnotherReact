let initalvalue={
    textColor:'',
    bgColor:{red:0,green:0,blue:0}
}
export function newone(state=initalvalue,action){
    switch(action.type){
        case 'text':
            return {...state,textColor:action.payload}
        case 'colorbackground':
            return {...state,bgColor:action.payload}
        default:
            return state
    }
}