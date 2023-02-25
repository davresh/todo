const inputValue = 'deletInp'
const changeInputVal = 'changeText'
export const inputInitialState = ''
export function inputValReducers(state=inputInitialState,action){
    switch(action.type){
        case 'changeText':
            return action.payload.inpVal;
        case 'deletInp':
            return ''
        default:
            return state
    }
}
export function deleteValue(){
    return {
        type:inputValue,
    }
}
export function changeInput(todo){
    return {
        type:changeInputVal,
        payload:{
            inpVal:todo.text
        }
    }
}