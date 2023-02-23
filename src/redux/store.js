import { combineReducers, legacy_createStore as createStore } from 'redux';

function todoReducers(state={},action){
    switch(action.type){
        case 'delet':
            return state.filter(list => {
                return list.id !== action.payload.id
            });
        case 'add':
            return [
                ...state.map((el,id)=>{
                    el.id = id
                    el.tagClass = ''
                    return el
                }),
                action.payload
            ];
        case 'checked':
            return state.map(el => {
                if(el.id == action.payload.id){
                    return action.payload
                }
                return el
            });
        case 'deleteChecked':
            return state.filter(el => {
                return el.check !== true
            })
        default:
            return state;
    }
}
function inpValReducers(state={},action){
    switch(action.type){
        case 'changeText':
            return action.payload.inpVal;
        case 'deletInp':
            return ''
        default:
            return state
    }
}
const store = createStore(combineReducers({
    inpVal:inpValReducers,
    todo:todoReducers,
}),{
    inpVal:'',
    todo:JSON.parse(localStorage.getItem('arr'))??[
        {
            id:0,
            text:'HTML',
            check:false,
            tagClass:'',
        },
        {
            id:1,
            text:'CSS',
            check:false,
            tagClass:'',
        },
        {
            id:2,
            text:'JAVASCRIPT',
            check:false,
            tagClass:'',
        },
    ]
})

export default store;